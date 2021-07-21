import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../modules/redux/image';
import { boardActions } from '../modules/redux/board';
import AWS from 'aws-sdk';

import Header from '../components/Header';
import { Text, Input, Button , Grid , Image} from '../elem';

const BoardEdit = ({match}) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [contents, setContent] = React.useState({content:'' });

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
                body: file,
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
    


    return (
        <React.Fragment>
            <Header/>
                <Section>
                <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                    <BoardHeader>
                        <Grid radius="22px"cover="cover" position="center"  margin="0 0 0 20px" height="22px" width="22px"/>
                    </BoardHeader>
                    <Text>
                        {"게시글 작성"}
                    </Text>
                    <input 
                        type='file'
                        ref={fileInput}
                        onChange={filePreview}
                    />
                    <Image 
                        shape="rectangle"
                        src={preview ? preview : "http://via.placeholder.com/400x300"}
                    />
                    <Input
                        value={contents.content}
                        label="게시물 내용을 입력해주세요!"
                        _onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                    <Grid>
                        {/* <Button _onClick={fileInput ? selectFile : withoutImgPost}>게시글 작성</Button> */}
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

const BoardHeader = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
`;

export default BoardEdit;