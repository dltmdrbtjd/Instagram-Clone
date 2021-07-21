import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../modules/redux/image';
import { boardActions } from '../modules/redux/board';

import Header from '../components/Header';
import Upload from '../shared/Upload';
import { Text, Input, Button , Grid , Image} from '../elem';

const BoardAdd = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    
    const board_list = useSelector((state) => state.board.list);
    const board_id = props.match.params.id;
    const is_edit = board_id ? true : false;
    const _board = is_edit ? board_list.find((p) => p.id === board_id) : null;
    const { history } = props;
    const [content, setContent] = React.useState(_board ? _board.content : "");

    
    React.useEffect(() => {
        if (is_edit && !_board) {
            window.alert("게시물에 정보가 없습니다!");
            history.goBack();
            return;
        }
        if (is_edit) {
            dispatch(imageCreators.setPreview(_board.image_url));
        } else{
            dispatch(imageCreators.setPreview("http://via.placeholder.com/400x300"))
        }
    }, []);

    const changeContent = (e) => {
        setContent(e.target.value);
    };

    const addBoard = () => {
        const contents = {
            content: content,
            imageUrl: "http://via.placeholder.com/400x300",
        }
        dispatch(boardActions.addBoardDB(contents));
    };

    const editBoard = () => {
        let board ={
            content : content,
            imageUrl: "http://via.placeholder.com/400x300",
        }
        dispatch(boardActions.editBoardDB(board_id,board));
    };



    return (
        <React.Fragment>
            <Header/>
                <Section>
                <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                    <BoardHeader>
                        <Grid radius="22px"cover="cover" position="center"  margin="0 0 0 20px" height="22px" width="22px"/>
                    </BoardHeader>
                    <Text>
                        {is_edit ? "게시글 수정" : "게시글 작성"}
                    </Text>
                    <Upload />
                    <Image 
                        shape="rectangle"
                        src={preview ? preview : "http://via.placeholder.com/400x300"}
                    />
                    <Input
                    value={content}
                    _onChange={changeContent}
                    label="내용을 입력해주세요!"
                    multiLine
                    />
                    <Grid>
                    {is_edit ? (
                        <Button _onClick={editBoard}>게시글 수정</Button>
                    ) : (
                        <Button _onClick={addBoard}>게시글 작성</Button>
                    )}
                    </Grid>
                </Grid>
            </Section>
        </React.Fragment>
    )
};



const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;

const BoardHeader = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
`;

export default BoardAdd;