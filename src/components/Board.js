import React, {useEffect} from 'react';

import {Grid,Text,Image} from '../elem/index';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { useDispatch,useSelector } from 'react-redux';
import { boardActions } from '../modules/redux/board';
// import { dateConvert } from '../shared/time';
import { history } from '../modules/configStore';

const Board = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(boardActions.loadBoardDB());
    },[])

    const board_list = useSelector((state) => state.board.list);
    const comments = useSelector((state) => state.comments.list);
    console.log(comments)

    return (
        <React.Fragment>
            {board_list.map((list,idx) => {
                return (
                        <Grid key={idx} position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                            <BoardHeader>
                                <Grid radius="22px"cover="cover" position="center"  margin="0 0 0 20px" height="22px" width="22px"bg={list.authorProfileImageUrl} />
                                <Text cursor="pointer" bold size="14px" color="#262626"margin="0 0 0 10px">{list.author}</Text>
                            </BoardHeader>
                            <Image shape="rectangle" src={list.imageUrl}/>
                            <Grid is_flex padding="10px 20px">
                                <Grid is_flex width="auto">
                                    <Grid cursor="pointer">
                                        <FavoriteBorderIcon />
                                    </Grid>
                                    <Grid key={list.articleId} _onClick={() => {
                                        history.push("/detail/"+idx)
                                    }}cursor="pointer" margin="0 0 0 10px">
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
                                    <Text cursor="pointer" bold size="14px" margin="0 10px 0 0">{list.author}</Text>
                                    <Text size="14px">{list.content}</Text>
                                </TextBox>
                                <Text _onClick={() => {
                                    history.push('/detail/'+idx)
                                }}margin="10px 0 0 0" cursor="pointer" size="14px" color="#8e8e8e">댓글 더보기</Text>
                                <Grid maxHeight="50px" overflow="hidden">
                                        {list.comments.map((list,idx) => {
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
                                </Grid>
                                <Text color="#c4c4c4" margin="10px 0 10px 0" size="10px">{list.createAt}</Text>
                            </Grid>
                            <Grid bordertop="1px solid #c4c4c4" is_flex height="40px" padding="25px 20px">
                                <CommentArea placeholder="댓글 달기..."></CommentArea>
                                <Text cursor="pointer" size="14px" color="#0095f6">게시</Text>
                            </Grid>
                        </Grid>
                )
            })}
        </React.Fragment>
    )
}

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

export default Board;