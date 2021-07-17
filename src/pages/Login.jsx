import React from 'react';
import styled from "styled-components";
import { Grid, Button, Input } from "../elem/index";

const Login = (props) => {
    return (
        <Container>
            <Grid padding="16px 0px">
                <Input
                    placeholder="사용자 아이디 또는 이메일을 입력해주세요"
                />
                <Input
                    placeholder="비밀번호"
                />
                <Button
                    text= "로그인"
                    width= "240px"
                    height= "40px"
                />
            </Grid>
        </Container>
    )
}

const Container = styled.div`

`;


export default Login;


