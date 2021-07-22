import React, {useEffect,useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { boardActions } from '../modules/redux/board';
import Header from '../components/Header';

import styled from 'styled-components';
import { Grid, Text, Image} from '../elem/index';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { history } from '../modules/configStore';

const BoardDetail = (props) => {
    const [comment, setComment] = useState('');
    const onReset = () => {
        setComment('');
    }
    const dispatch = useDispatch();
    let board_index = parseInt(props.match.params.id);
    const detail = useSelector((state) => state.board.detail);
    const userid = localStorage.getItem('username');

    useEffect(() => {
        dispatch(boardActions.detailArticleDB(board_index));
    },[])


    return (
        <React.Fragment>
            <Header />
                <Section>
                    <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                        <BoardHeader>
                            <Grid width="20%" is_flex>
                                <Grid radius="22px"cover="cover" position="center"  margin="0 0 0 20px" height="22px" width="22px"bg={detail && detail.authorProfileImageUrl} />
                                <Text cursor="pointer" bold size="14px" color="#262626"margin="0 0 0 10px">{detail && detail.author}</Text>
                            </Grid>
                            <Grid width="22%" is_flex>
                                {detail.username === userid ? (
                                    <>
                                        <MiniBtn onClick={() => {
                                            history.push(`/edit/${detail.articleId}`)
                                        }}>수정</MiniBtn>
                                        <MiniBtn onClick={() => {
                                            dispatch(boardActions.deleteArticleDB(detail && detail.articleId))
                                        }}>삭제</MiniBtn>
                                    </>
                                ):(
                                    <MiniBtn onClick={() => {
                                        history.push('/')
                                    }}>목록으로 이동</MiniBtn>
                                )}
                            </Grid>
                        </BoardHeader>
                        <Image shape="rectangle" src={detail && detail.imageUrl}/>
                        <Grid is_flex padding="10px 20px">
                            <Grid is_flex width="auto">
                                <Grid cursor="pointer">
                                        {detail && !detail.isLiked ? (
                                            <FavoriteBorderIcon onClick={() => {
                                                dispatch(boardActions.toggleLikeDB(detail.articleId))
                                            }}/>
                                        ):(
                                            <FavoriteIcon style={{ color: red[500]}} onClick={()=>{
                                                dispatch(boardActions.toggleLikeDB(detail.articleId))
                                            }}/>
                                        )}
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
                            <Text cursor="pointer" size="14px" bold color="#262626">좋아요 {detail && detail.likeCount}개</Text>
                            <TextBox >
                                <Text cursor="pointer" bold size="14px" margin="0 10px 0 0">{detail && detail.author}</Text>
                                <Text size="14px" margin="0 0 6px 0">{detail && detail.content}</Text>
                            </TextBox>
                            <Grid>
                                {detail.comments && detail.comments.map((list,idx) => {
                                    return (
                                        <Comment key={idx}>
                                            <TextBox>
                                                <Text bold cursor="pointer" size="14px" margin="0 10px 0 0">{list.commentAuthor}</Text>
                                                <Text size="14px">{list.content}</Text>
                                            </TextBox>
                                            <Grid cursor="pointer" width="auto">
                                                {list.username === userid ? (
                                                    <DeleteForeverIcon onClick={() => {
                                                        dispatch(boardActions.deleteCommentDB(list.articleId,list.commentId,list.articleId))
                                                    }}style={{ fontSize: 14, marginRight: "6px" }} />
                                                ):(
                                                    ""
                                                )}
                                                
                                                <FavoriteBorderIcon style={{ fontSize: 14 }}/>
                                            </Grid>
                                        </Comment>
                                    )
                                })}
                                <Text color="#c4c4c4" margin="10px 0 10px 0" size="10px">{detail && detail.createAt}</Text>
                            </Grid>
                        </Grid>
                        <Grid bordertop="1px solid #c4c4c4" is_flex height="40px" padding="25px 20px">
                            <CommentArea value={comment} onChange={(e) => {
                                setComment(e.target.value);
                            }}placeholder="댓글 달기..."></CommentArea>
                            <Text _onClick={() => {
                                    dispatch(boardActions.createCommentDB(detail.articleId,comment,board_index))
                                    onReset()
                            }}cursor="pointer" size="14px" color="#0095f6">게시</Text>
                        </Grid>
                    </Grid>
                </Section>
        </React.Fragment>
    )
}

const MiniBtn = styled.button`
    cursor: pointer;
    background-color: #f7f7f7;
    padding: 6px 12px;
    border: 1px solid #c4c4c4;
    border-radius: 6px;
    margin-right: 10px;
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
    width: 88%;
    margin-top: 10px;
`;

const BoardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

export default BoardDetail;