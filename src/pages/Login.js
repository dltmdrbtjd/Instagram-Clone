import React from 'react';
import styled from "styled-components";
import { Grid, Button, Input } from "../elem/index";

const Login = (props) => {
    return (
        <Container>
            <Grid margin="0 0 10px" padding="10px 0" border="1px solid #8E8E8E" bgColor="#ffffff" width="350px" height="380px">
                <Grid width="175px" height="51px" cursor margin="22px 86.5px 12px" >
                    <img width="175" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                </Grid>
                <Grid width="348px" height="213px" margin="24px 0 0" >
                    <Input/>
                    <Input/>
                </Grid>
            </Grid>
        </Container>
            
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4c4c4;
    width: 100%;
    height: 100%;
`;



export default Login;
