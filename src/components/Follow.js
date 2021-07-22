import React, { useEffect } from 'react';

import styled from 'styled-components';
import { Grid,Text } from '../elem';

import { useDispatch, useSelector } from 'react-redux';
import { followCreator } from '../modules/redux/follow';
import { apis } from '../shared/api';

const Follow = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(followCreator.followLoadDB())
    },[])

    const recommend = useSelector((state) => state.follow.follow);
    
    const Following = (userId) => {
        apis
        .follow(userId)
        .then((res) => {
            dispatch(followCreator.followLoadDB())
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <React.Fragment>
            <Section>
                <Grid bgColor="#ffffff" border="1px solid #c4c4c4">
                    <RecommendBox>
                        {recommend && recommend.map((list) => {
                            return (
                                    <Grid width="20%" is_flex>
                                        <Grid margin="0 10px 0 0"cover="cover" position="center" radius="40px" width="40px" height="40px" bg={list.profileImageUrl}></Grid>
                                        <Grid width="60%">
                                            <Text>{list.nickname}</Text>
                                            <Text _onClick={() => {
                                                Following(list.userId)
                                            }}color="#39A2DB" cursor="pointer" margin="3px 0 0 0"size="14px">팔로우</Text>
                                        </Grid>
                                    </Grid>
                            )
                        })}
                    </RecommendBox>
                </Grid>
            </Section>
        </React.Fragment>
    )
}

const RecommendBox = styled.div`
    box-sizing: border-box;
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 67px;
    transform: translateX(-50%);
`;

export default Follow;