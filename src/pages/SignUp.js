import React, { useState } from 'react';
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elem/index";
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/redux/user';
import { idCheck, emailCheck, nickCheck } from '../shared/regExp';
import { history } from '../modules/configStore';

const SignUp = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email,setEmail] = useState('');
    const [nick,setNick] = useState('');

    const signup =() => {

    if(email === '' || nick === '' || id === '' || pw === ''){
        window.alert("이메일 , 닉네임 , 아이디, 비밀번호를 모두 입력해주세요!");
            return;
    }

    if(!idCheck(id)){

        window.alert("숫자 및 영어만 입력가능! 다시 확인해주세요!");
        return;
    }

    if(!nickCheck(nick)){
        window.alert("특수문자는 사용 불가능합니다 다시 확인해주세요!");
        return;
    }
    if(!emailCheck(email)){
        window.alert("올바른 이메일 형식으로 작성 부탁드립니다!");
        return;
    }

    dispatch(userCreators.registerDB(email, nick, id, pw));

    }
        

    return (
        <Container>
            <Grid margin="100px 0 10px" padding="10px 0" border="1px solid #8E8E8E" bgColor="#ffffff" width="350px" height="465px">
                <Grid width="175px" height="51px" cursor margin="22px 86.5px 12px" >
                    <img width="175" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                </Grid>
                <Grid width="348px" height="213px" margin="24px 0 0 0" >
                    <Grid width="268px" height="40px" margin="0px 40px 6px 40px">
                        <Textbox>
                            <h2>친구들의 사진과 동영상을 보려면</h2>
                            <span>가입하세요</span>
                        </Textbox>
                    </Grid>
                    <Grid width="268px" height="20px" margin="12px 40px 22px 40px">
                        <Button padding="5px 10px 5px 10px">facebook 으로 로그인</Button>
                    </Grid>
                    <Grid width="268px" height="38px" margin="15px 40px 6px 40px">
                        <Input
                        placeholder="이메일"
                        _onChange={(e)=> {setEmail(e.target.value);}}
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="3px 40px 6px 40px">
                        <Input
                        placeholder="닉네임"
                        _onChange={(e)=> {setNick(e.target.value);}}
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="3px 40px 6px 40px">
                        <Input
                        placeholder="아이디"
                        _onChange={(e)=> {setId(e.target.value);}}
                        />
                    </Grid>
                    <Grid width="268px" height="38px" margin="3px 40px 6px 40px">
                        <Input
                        type="password"
                        placeholder="비밀번호"
                        _onChange={(e)=> {setPw(e.target.value);}}
                        />
                    </Grid>
                    <Grid width="268px" height="30px" margin="14px 40px 14px 40px">
                        <Button padding="6px 10px 6px 10px" _onClick={signup}>
                            가입
                        </Button>
                    </Grid>
                </Grid>
                <Grid margin="160px 0 10px" padding="22px 0px 10px 0px" border="1px solid #8E8E8E" bgColor="#ffffff"width="348px" height="63px">
                    <TextBox>
                        <span>계정이 있으신가요?</span>
                            <Text
                            cursor="pointer"
                            color ="#0095f6"
                            _onClick={() => {
                                props.history.push("/login");
                            }} 
                            >로그인
                            </Text>
                    </TextBox>
                </Grid>
                <Down>
                    <DownP>앱을 다운로드 하세요</DownP>
                </Down>
                <ImageContainer>
                    <Grid cursor="pointer" cover="cover" margin="5px" width="135px" height="40px" bg="https://22instaclone.s3.ap-northeast-2.amazonaws.com/apple.jpg"></Grid>
                    <Grid cursor="pointer" cover="cover" margin="5px" width="135px" height="40px" bg="https://22instaclone.s3.ap-northeast-2.amazonaws.com/google.jpg"></Grid>
                </ImageContainer>
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

const Down = styled.div`
    text-align: center;
    width: 348px;
    height: 63px;
    margin-top: 20px;
`;

const DownP = styled.p`
    font-size: 15px;
`;

const ImageContainer = styled.div`
    width: 348px;
    height: 53px;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const TextBox = styled.div`
    width: 100%;
    display: flex;
    text-align :center;
    justify-content: center;
`;

const Textbox = styled.div`
    color : #8E8E8E;
    font-size : 18px;
    font-weight: 800;
    width : 100%;
    text-align :center;
    justify-content: center;
`;

export default SignUp;