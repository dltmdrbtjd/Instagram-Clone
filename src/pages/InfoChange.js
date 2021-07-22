import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoCreators } from '../modules/redux/userinfo';
import { imageCreators } from '../modules/redux/image';
import { userCreators } from '../modules/redux/user';
import { apis } from '../shared/api';

import AWS from 'aws-sdk';

import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elem/index';
import { history } from '../modules/configStore';

const InfoChange = (props) => {

    const dispatch = useDispatch();


    const profile = useSelector((state) => state.userinfo.profile);
    const preview = useSelector((state) => state.image.preview);
    const [newNick, setNewNick] = useState('');
    
    useEffect(() => {
        dispatch(InfoCreators.profileLoadDB());
        setNewNick(profile && profile.nickname)
    },[])

    const fileInput = useRef();

    const changeInfo = {
        nickname: newNick
    }

	const filePreview = () => {
		const reader = new FileReader();
		const file = fileInput.current.files[0];

		reader.readAsDataURL(file);
		reader.onloadend = () => {
			dispatch(imageCreators.setPreview(reader.result));
		};
	};

    AWS.config.update({
		region: 'ap-northeast-2',
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'ap-northeast-2:1341881f-0e47-4578-a076-7cf301309b84',
		}),
	});

    const selectFile = () => {
		const date = new Date();
		const file = fileInput.current.files[0];

        if (!file) {
			const content = {
				...changeInfo,
				profileImageUrl: profile.profileImageUrl,
			};
            apis
            .changeProfile(content)
            .then((res) => {
                history.goBack();
            }).catch((err) => {
                console.log(err)
            })
			return;
		}

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'todayrecipe',
				Key: file.name + date.getTime() + '.jpg',
				Body: file,
			},
		});

		const promise = upload.promise();

		promise
			.then((data) => {
				const content = {
					...changeInfo,
					profileImageUrl: data.Location,
				};
                apis
                .changeProfile(content)
                .then((res) => {
                    history.goBack();
                    dispatch(userCreators.setLogin({profileImage:data.Location}))
                }).catch((err) => {
                    console.log(err)
                })
			})
			.catch((err) => {
				window.alert('이미지 업로드에 문제가 있어요!', err);
			});
	};

    return (
        <React.Fragment>
            <Header />
            <Section>
                <Grid radius="20px" is_flex padding="30px" margin="60px 0 0 0"border="1px solid #c4c4c4">
                    <Grid radius="200px" width="200px" height="200px" cover="cover" position="center" bg={preview ? preview : profile && profile.profileImageUrl}></Grid>
                    <Grid width="60%">
                        <Grid>
                            <Text bold>아이디</Text>
                            <Text margin="6px 0 0 0">{profile && profile.username}</Text>
                        </Grid>
                        <Grid margin="20px 0 0 0">
                            <Text bold>이메일</Text>
                            <Text margin="6px 0 0 0">{profile && profile.email}</Text>
                        </Grid>
                        <Grid margin="20px 0 0 0" is_flex>
                            <Input _onChange={(e) =>{
                                setNewNick(e.target.value);
                            }} is_submit label="닉네임" value={newNick} type="text" placeholder={profile && profile.nickname}/>
                        </Grid>
                        <Grid margin="10px 0 0 0">
                            <Text bold>프로필 이미지 변경</Text>
                            <Grid margin="10px 0 0 0">
                                <Label htmlFor="fileUpload">이미지 선택하기</Label>
                                <input type="file" onChange={filePreview} id="fileUpload" ref={fileInput} style={{ display: "none"}}/>
                            </Grid>
                        </Grid>
                        <Grid margin="10px 0 0 0">
                            <Button _onClick={selectFile} padding="10px">변경내용 저장하기</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </React.Fragment>
    )
}

const Label = styled.label`
    display: block;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    margin-top: 6px;
    text-align: center;
`;

const Section = styled.section`
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;


export default InfoChange;