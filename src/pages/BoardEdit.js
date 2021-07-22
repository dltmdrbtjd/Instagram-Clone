import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../modules/redux/board';

import Header from '../components/Header';
import { Text, Input, Button , Grid } from '../elem';

const BoardEdit = (props) => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.board.detail);
    console.log(content)
    const [contents, setContents] = React.useState('');

    const id = props.match.params.id;
    
    useEffect(() => {
        dispatch(boardActions.detailArticleDB(id))
        setContents(content.content)
	}, []);


    return (
        <React.Fragment>
            <Header/>
                <Section>
                <Grid position="relative" border="1px solid #c4c4c4" margin="30px 0 30px 0" bgColor="#ffffff">
                    <Text margin="10px" bold size= "20px" color = "#646464" >
                        작성내용 수정
                    </Text>
                    <Input
                    multiLine
                    value={contents}
                    placeholder="게시물 내용을 입력해주세요!"
                    _onChange={(e) => {
                        setContents(e.target.value);
                    }}
                    />
                    <Grid>
                        <Button
                        padding="10px"
                        _onClick={() => {
                            const result = window.confirm('게시물을 수정하시겠습니까??')
                            if(result){
                                dispatch(boardActions.editBoardDB(id, contents));
                            }
                        }}
                        >게시글 작성
                        </Button>
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

export default BoardEdit;