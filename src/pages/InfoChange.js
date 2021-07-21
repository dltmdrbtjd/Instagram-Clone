import React from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elem/index';

const InfoChange = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Section>
                <Grid radius="20px" is_flex padding="30px" margin="60px 0 0 0"border="1px solid #c4c4c4">
                    <Grid radius="200px" width="200px" height="200px" cover="cover" position="center" bg="https://todayrecipe.s3.ap-northeast-2.amazonaws.com/%EB%A2%B0%EC%8A%A4%ED%8B%B0.jpg1626330561675.jpg"></Grid>
                    <Grid width="60%">
                        <Grid>
                            <Text bold>아이디</Text>
                            <Text margin="6px 0 0 0">dltmdrbtjd</Text>
                        </Grid>
                        <Grid margin="20px 0 0 0">
                            <Text bold>이메일</Text>
                            <Text margin="6px 0 0 0">dltmdrbtjd@naver.com</Text>
                        </Grid>
                        <Grid margin="20px 0 0 0" is_flex>
                            <Input is_submit label="닉네임"type="text" value="ㅋㅋ"></Input>
                        </Grid>
                        <Grid margin="10px 0 0 0">
                            <Text bold>프로필 이미지 변경</Text>
                            <ProfileButton>프로필 이미지 변경</ProfileButton>
                        </Grid>
                        <Grid margin="10px 0 0 0">
                            <Button padding="10px">변경내용 저장하기</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </React.Fragment>
    )
}


const ProfileButton = styled.button`
    display: block;
    background-color: #f7f7f7;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    margin-top: 6px;
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