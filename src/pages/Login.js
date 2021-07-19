import React, { useState } from 'react';
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elem/index";
import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/redux/user';
import { history } from '../modules/configStore';

const Login = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const login =() => {
        dispatch(userCreators.setLoginDB(id,pw));
    }

    return (
        <Container>
            <Grid margin="100px 0 10px" padding="10px 0" border="1px solid #8E8E8E" bgColor="#ffffff" width="350px" height="380px">
                <Grid width="175px" height="51px" cursor margin="22px 86.5px 12px" >
                    <img width="175" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                </Grid>
                <Grid width="348px" height="213px" margin="24px 0 0 0" >
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        placeholder="아이디 또는 이메일"
                        _onChange={(e)=>
                            setId(e.target.value)
                        }/>
                    </Grid>
                    <Grid width="268px" height="38px" margin="0px 40px 6px 40px">
                        <Input
                        type="password"
                        placeholder="비밀번호"
                        _onChange={(e)=>
                            setPw(e.target.value)
                        }/>
                    </Grid>
                    <Grid width="268px" height="30px" margin="14px 40px 14px 40px">
                        <Button padding="6px 10px 6px 10px" _onClick={login}>
                            로그인
                        </Button>
                    </Grid>
                    <Grid width="268px" height="15px" margin="18px 40px 26px 40px">
                        <Text>------또는------------------------------</Text>
                    </Grid>
                    <Grid width="268px" height="20px" margin="12px 40px 12px 40px">
                        <Text>facebook 으로 로그인</Text>
                    </Grid>
                    <Secret>
                        <SecretP>비밀번호를 잊으셨나요?</SecretP>
                    </Secret>
                </Grid>
                <Grid margin="70px 0 10px" padding="10px 0px 10px 0px" border="1px solid #8E8E8E" bgColor="#ffffff"width="348px" height="63px">
                    <Text>계정이 없으신가요?
                    <ATag 
                    onClick={() => {
                        props.history.push("/signup");
                        console.log("성공");
                    }} 
                    >가입하기
                        </ATag>
                    </Text>
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

const ATag = styled.a`
    color :#0095f6;
`;


export default Login;
