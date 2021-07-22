import React, { useEffect } from 'react';
import styled from 'styled-components';

import { apis } from '../../shared/api';
import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../modules/redux/image';
import { boardActions } from '../modules/redux/board';
import AWS from 'aws-sdk';

import Header from '../components/Header';
import { Text, Input, Button , Grid , Image} from '../elem';

const BoardEdit = ({ match }) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [contents, setContents] = React.useState({content:''});

    const {
        params: { id },
    } = match;

    AWS.config.update({
		region: 'ap-northeast-2',
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'ap-northeast-2:22534b72-b1ec-48e6-89f1-3b8e036b808b',
		}),
	});

    const fileInput = React.useRef();

    const filePreview = () => {
		const reader = new FileReader();
		const file = fileInput.current.files[0];

		reader.readAsDataURL(file);
		reader.onloadend = () => {
			dispatch(imageCreators.setPreview(reader.result));
		};
	};

    const selectFile = () => {
        const date = new Date();
        const file = fileInput.current.files[0];

        if (!file){
            dispatch(imageCreators.imageUpload(contents.imageUrl));
            const content = {
                ...contents,
                imageUrl: contents.imageUrl,
            };
            dispatch(boardActions.editBoardDB(id, content));
            return;
        }
        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket : '22instaclone',
                Key: file.name + date.getTime() + '.jpg',
                Body: file,
            },
        });
        
        const promise = upload.promise();

        promise 
        .then((data) => {
            dispatch(imageCreators.uploadImage(data.Location));
            const content = {
                ...contents,
                imageUrl: data.Location,
            };
            dispatch(boardActions.editBoardDB(id, content));
        })
        .catch((err) => {
            window.alert('이미지 업로드에 문제가 있습니다!', err);
        });
    };
    
    useEffect(() => {
		const fetchArticle = async () => {
			try {
				const {
					data: { content, imageUrl },
				} = await apis.UpdateArticles(id)
                setContents({content ,imageUrl});
			} catch (e) {
			}
		};
		fetchArticle();
	}, [id]);


    return (
        <React.Fragment>
            <Header/>
                <Section>
                <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                    <Text margin="10px" bold size= "20px" color = "#646464" >
                        게시글 작성
                    </Text>
                    <InputBox 
                        type='file'
                        ref={fileInput}
                        onChange={filePreview}
                    />
                    <Image 
                        shape="rectangle"
                        src={preview ? preview : "http://via.placeholder.com/400x300"}
                    />
                    <Input
                    multiLine
                    value={contents}
                    placeholder="게시물 내용을 입력해주세요!"
                    _onChange={(e) => {
                        setContents({...contents, content: e.target.value});
                    }}
                    />
                    <Grid>
                        <Button
                        padding="10px"
                        _onClick={() => {
                            const result = window.confirm('게시물을 수정하시겠습니까??')
                            if(result){
                                selectFile();
                            }
                        }}
                        >게시글 작성
                        </Button>
                    </Grid>
                </Grid>
            </Section>
        </React.Fragment>
    )
};



const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;

const InputBox = styled.input`
    margin-left : 2px;
    margin-bottom: 5px;
    width :95%;
    display: inline-block;
    padding: .5em .75em;
    color: #999; font-size:
    inherit; line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;

`;
export default BoardEdit;