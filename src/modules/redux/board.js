import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

import { commentsActions } from './comments';

// action
const LOAD = 'board/LOAD';
const ADD = 'board/ADD';
const EDIT = 'board/EDIT';
const DELETE = 'board/DELETE';

// action creator
const loadBoard = createAction(LOAD, (boards) => ({boards}));
const addBoard = createAction(ADD, (content,imageUrl) => ({content,imageUrl}));
const editBoard = createAction(EDIT, (boardId,board) => ({boardId,board}));
const deleteBoard = createAction(DELETE, (articleId,board) => ({articleId,board}));


// initialState
const initialState = {
    list: [],
    board: null,
}

const loadBoardDB = () => {
    return function (dispatch, getState, {history}){
        apis
        .articles()
        .then((res) => {
            dispatch(loadBoard(res.data))
            // const commentsList = []
            res.data.map((list) => {
                // commentsList.push(list.comments)
                dispatch(commentsActions.commentsLOAD(list.articleId, list.comments))
            })
            // dispatch(commentsActions.commentsLOAD(commentsList))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const addBoardDB = (content,imageUrl) => {
    return function(dispatch, getState, {history}){
        
        apis
        .AddArticles(content,imageUrl)
        .then((res) => {
            dispatch(addBoard(res.data))
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })
    }
}

const editBoardDB = (boardId,board) => {
    return function(dispatch, getState, {history}){
        apis
        .UpdateArticles(boardId,board)
        .then((res) => {
            dispatch(addBoard(boardId,board))
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })
    }
}

const deleteBoardDB = (articleId) => {
    return function(dispatch, getState, {history}){
        apis
        .DelArticles(articleId)
        .then((res) => {
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })
    }
}

export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.boards
    }),
    [ADD]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.board)
    }),
    [EDIT]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post }; 
    }),
    [DELETE]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.board
    }),
}, initialState)

const boardActions = {
    loadBoardDB,
    addBoardDB,
    editBoardDB,
    deleteBoardDB,
}

export { boardActions }