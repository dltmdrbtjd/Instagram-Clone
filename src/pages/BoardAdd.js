import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../modules/redux/image';
import { boardActions } from '../modules/redux/board';
import AWS from 'aws-sdk';

import Header from '../components/Header';
import { Text, Input, Button , Grid , Image} from '../elem';

const BoardAdd = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [content, setContent] = React.useState('');

    const contents = {
        content: content,
    };

    AWS.config.update({
		region: 'ap-northeast-2',
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'ap-northeast-2:1a691b2f-007a-4b78-897e-97ed1d201f4d',
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
            window.alert('이미지를 업로드 해주세요!');
            return;
        }
        if (contents.content ===''){
            window.alert('내용을 모두 작성해주세요!');
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
            console.log(content);
            dispatch(boardActions.addBoardDB(content));
        })
        .catch((err) => {
            window.alert('이미지 업로드에 문제가 있습니다!', err);
        });
    };
    
    const withoutImgPost = () => {
        dispatch(boardActions.addBoardDB(content));
    };

    return (
        <React.Fragment>
            <Header/>
                <Section>
                <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                    <Text>
                        게시글 작성
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
                    label="게시물 내용을 입력해주세요!"
                    _onChange={(e) => {
                        setContent(e.target.value);
                    }}
                    />
                    <Grid>
                        <Button _onClick={fileInput ? selectFile : withoutImgPost}>게시글 작성</Button>
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

export default BoardAdd;