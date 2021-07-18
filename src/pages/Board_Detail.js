import React, {useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { boardActions } from '../modules/redux/board';
import Header from '../components/Header';

import styled from 'styled-components';
import { Grid, Text, Image} from '../elem/index';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

import { history } from '../modules/configStore';

const BoardDetail = (props) => {
    const dispatch = useDispatch();
    
    const board_list = useSelector((state) => state.board.list);
    let board_index = parseInt(props.match.params.index);

    const detail_board = board_list[board_index];

    useEffect(() => {
        dispatch(boardActions.loadBoardDB())
    },[])


    return (
        <React.Fragment>
            <Header />
                <Section>
                    <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                        <BoardHeader>
                            <Grid radius="22px"cover="cover" position="center"  margin="0 0 0 20px" height="22px" width="22px"bg={detail_board && detail_board.authorProfileImageUrl} />
                            <Text cursor="pointer" bold size="14px" color="#262626"margin="0 0 0 10px">{detail_board && detail_board.author}</Text>
                        </BoardHeader>
                        <Image shape="rectangle" src={detail_board && detail_board.imageUrl}/>
                        <Grid is_flex padding="10px 20px">
                            <Grid is_flex width="auto">
                                <Grid cursor="pointer">
                                    <FavoriteBorderIcon />
                                </Grid>
                                <Grid cursor="pointer" margin="0 0 0 10px">
                                    <ChatBubbleOutlineRoundedIcon style={{ fontSize: 24}}/>
                                </Grid>
                            </Grid>
                            <Grid width="auto" cursor="pointer">
                                <TurnedInNotIcon />
                            </Grid>
                        </Grid>
                        <Grid padding="0 20px">
                            <Text cursor="pointer" size="14px" bold color="#262626">좋아요 20개</Text>
                            <TextBox >
                                <Text cursor="pointer" bold size="14px" margin="0 10px 0 0">{detail_board && detail_board.author}</Text>
                                <Text size="14px">{detail_board && detail_board.content}</Text>
                            </TextBox>
                            <Text margin="10px 0 0 0" cursor="pointer" size="14px" color="#8e8e8e">댓글 2개 더보기</Text>
                            <Grid>
                                {detail_board.comments && detail_board.comments.map((list,idx) => {
                                    return (
                                        <Comment key={idx}>
                                            <TextBox>
                                                <Text bold cursor="pointer" size="14px" margin="0 10px 0 0">{list.commentAuthor}</Text>
                                                <Text size="14px">{list.content}</Text>
                                            </TextBox>
                                            <Grid cursor="pointer" width="auto">
                                                <FavoriteBorderIcon style={{ fontSize: 14 }}/>
                                            </Grid>
                                        </Comment>
                                    )
                                })}
                                <Text color="#c4c4c4" margin="10px 0 10px 0" size="10px">{detail_board && detail_board.createAt}</Text>
                            </Grid>
                        </Grid>
                        <Grid bordertop is_flex height="40px" padding="25px 20px">
                            <CommentArea placeholder="댓글 달기..."></CommentArea>
                            <Text cursor="pointer" size="14px" color="#0095f6">게시</Text>
                        </Grid>
                    </Grid>
                </Section>
        </React.Fragment>
    )
}


const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;

const CommentArea = styled.textarea`
    width: 90%;
    height: 18px;
    border: none;
    resize: none;
    outline: none;
`;

const Comment = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const TextBox = styled.div`
    display: flex;
    margin-top: 10px;
`;

const BoardHeader = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
`;

export default BoardDetail;