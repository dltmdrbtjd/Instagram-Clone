import React, { useEffect } from 'react';

import Header from '../components/Header';

import styled from 'styled-components';
import {Text , Grid} from '../elem/index';
import { history } from '../modules/configStore';

import { useDispatch,useSelector } from 'react-redux';
import { InfoCreators } from '../modules/redux/userinfo';

const UserProfile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InfoCreators.userInfoLoadDB());
    },[])

    const userinfo = useSelector((state) => state.userinfo.user);

    return (
        <React.Fragment>
            <Header />
            <Section>
                <Grid padding="0 0 50px 0" borderbot="1px solid #c4c4c4" width="100%" is_flex>
                    <Grid margin="30px 0 0 0" cover="cover" position="center" radius="150px" width="150px" height="150px" bg={userinfo && userinfo.myProfileImageUrl}></Grid>
                    <Grid width="65%">
                        <Grid width="60%" is_flex>
                            <Text size="30px">{userinfo && userinfo.nickname}</Text>
                            <ProfileButton onClick={() => {
                                history.push('/userinfo/infoChange')
                            }}>프로필 편집</ProfileButton>
                        </Grid>
                        <Grid margin="20px 0 0 0"width="80%" is_flex>
                            <Text>게시물 {userinfo && userinfo.articleCount}개</Text>
                            <Text>팔로우 {userinfo && userinfo.followCount}</Text>
                            <Text>팔로워 {userinfo && userinfo.followerCount}</Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid margin="10px 0 0 0" center="center">
                    <Text cursor="pointer" size="14px">🔳 게시물</Text>
                </Grid>
                <ImageBox>
                    {userinfo && userinfo.myInfoArticleResponseDtoList.map((list) => {
                        return(
                            <Grid _onClick={() => {
                                history.push(`/detail/${list.articleId}`)
                            }}cursor="pointer" cover="cover" position="center" margin="10px" width="180px" height="180px" bg={list.articleImageUrl}></Grid>
                        )
                    })}
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