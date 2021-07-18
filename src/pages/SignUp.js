import React from 'react';
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elem/index";

const SignUp = (props) => {
    return (
        <Container>
            <Grid margin="100px 0 10px" padding="10px 0" border="1px solid #8E8E8E" bgColor="#ffffff" width="350px" height="490px">
                <Grid width="175px" height="51px" cursor margin="22px 86.5px 12px" >
                    <img width="175" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                </Grid>
                <Grid width="348px" height="213px" margin="24px 0 0 0" >
                    <Grid width="268px" height="40px" margin="0px 40px 6px 40px">
                        <h2>친구들의 사진과 동영상을 보려면</h2>
                        <span>가입하세요</span>
                    </Grid>
                    <Grid width="268px" height="20px" margin="12px 40px 12px 40px">
                        <Text>facebook 으로 로그인</Text>
                    </Grid>
                    <Grid width="268px" height="15px" margin="18px 40px 26px 40px">
                        <Text>------또는------------------------------</Text>
                    </Grid>
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        placeholder="이메일"
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        placeholder="이름"
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        placeholder="아이디"
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        placeholder="비밀번호"
                        />
                    </Grid>
                    <Grid width="268px" height="30px" margin="14px 40px 14px 40px">
                        <Button padding="6px 10px 6px 10px">
                            가입
                        </Button>
                    </Grid>
                </Grid>
                <Grid margin="180px 0 10px" padding="10px 0px 10px 0px" border="1px solid #8E8E8E" bgColor="#ffffff"width="348px" height="63px">
                    <Text>계정이 없으신가요? 가입하기</Text>
                </Grid>
                <Down>
                    <DownP>앱을 다운로드 하세요</DownP>
                </Down>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    top: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4c4c4;
    width: 100%;
    height: 100%;
`;

const SecretP = styled.p`
    font-size: 10px;
`;

const Secret = styled.div`
    text-align: center;
    width: 348px;
    height: 20px;
    margin-top: 20px;
`;

const Down = styled.div`
    text-align: center;
    width: 348px;
    height: 63px;
    margin-top: 20px;
`;

const DownP = styled.p`
    font-size: 15px;
`;

export default SignUp;