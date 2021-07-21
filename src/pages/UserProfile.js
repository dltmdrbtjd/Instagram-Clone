import React from 'react';

import Header from '../components/Header';

import styled from 'styled-components';
import {Text , Grid} from '../elem/index';
import { history } from '../modules/configStore';

const UserProfile = () => {
    return (
        <React.Fragment>
            <Header />
            <Section>
                <Grid padding="0 0 50px 0" borderbot="1px solid #c4c4c4" width="100%" is_flex>
                    <Grid margin="30px 0 0 0" cover="cover" position="center" radius="150px" width="150px" height="150px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid width="65%">
                        <Grid width="50%" is_flex>
                            <Text size="30px">sss9yu</Text>
                            <ProfileButton onClick={() => {
                                history.push('/userinfo/infoChange')
                            }}>프로필 편집</ProfileButton>
                        </Grid>
                        <Grid margin="20px 0 0 0"width="80%" is_flex>
                            <Text>게시물 7개</Text>
                            <Text>팔로워 29</Text>
                            <Text>팔로우 27</Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid margin="20px 0 0 0" center="center">
                    <Text cursor="pointer" size="14px">🔳 게시물</Text>
                </Grid>
                <ImageBox>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" position="center" margin="20px" width="160px" height="160px" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                </ImageBox>
            </Section>
        </React.Fragment>
    )
}

const ImageBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ProfileButton = styled.button`
    background-color: #f7f7f7;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;

const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;


export default UserProfile;