import React, { useState } from 'react';
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elem/index";
import Footer from '../components/Footer';
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
                    <Grid width="268px" height="38px" margin="10px 40px 6px 40px">
                        <Input
                        type="password"
                        placeholder="비밀번호"
                        _onChange={(e)=>
                            setPw(e.target.value)
                        }/>
                    </Grid>
                    <Grid width="268px" height="30px" margin="34px 40px 14px 40px">
                        <Button padding="6px 10px 6px 10px" _onClick={login}>
                            로그인
                        </Button>
                    </Grid>
                    <Secret>
                        <SecretP>비밀번호를 잊으셨나요?</SecretP>
                    </Secret>
                </Grid>
                <Grid margin="70px 0 10px" padding="22px 0px 10px 0px" border="1px solid #8E8E8E" bgColor="#ffffff"width="348px" height="63px">
                    <TextBox>
                        <span>계정이 없으신가요?</span>
                        <Text 
                        cursor="pointer"
                        color ="#0095f6"
                        _onClick={() => {
                            props.history.push("/signup");
                        }} 
                        >가입하기
                        </Text>
                    </TextBox>
                </Grid>
            </Grid>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;

const SecretP = styled.p`
    font-size: 10px;
`;

const Secret = styled.div`
    text-align: center;
    width: 348px;
    height: 20px;
    margin-top: 30px;
`;

const TextBox = styled.div`
    width: 100%;
    display: flex;
    text-align :center;
    justify-content: center;
`;

export default Login;
