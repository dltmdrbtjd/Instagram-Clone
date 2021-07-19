import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import { apis } from "../../shared/api";

const LOAD = 'comments/LOAD';
const CREATE = 'comments/CREATE';
const DELETE = 'comments/DELETE';
const UPDATE = 'comments/UPDATE';

const initialState = {
    list: [],
}

const commentsLOAD = createAction(LOAD, (articleId,comments) => ({articleId,comments}));
const commentsCREATE = createAction(CREATE, (articleId,comment) => ({articleId,comment}));
const commentsDELETE = createAction(DELETE, (articleId,commentId) => ({articleId,commentId}));
const commentsUPDATE = createAction(UPDATE, (articleId,commentId,content) => ({articleId,commentId,content}));

const commentsCreateDB = (articleId) => {
    return function(dispatch, getState, {history}){
        apis
        .AddComment(articleId)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}

const commentsDeleteDB = (articleId,commentId) => {
    return function(dispatch, getState, {history}){
        apis
        .DelComment(articleId,commentId)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}

const commentsUpdateDB = (articleId,commentId) => {
    return function(dispatch, getState, {history}){
        apis
        .UpdateComment(articleId,commentId)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.articleId] = action.payload.comments
    }),
    [CREATE]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.articleId] = draft.list[action.payload.articleId] 
        ? [action.payload.comment, ...draft.list[action.payload.articleId]] 
        : [action.payload.comment];
    }),
    [DELETE]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.articleId] = draft.list[action.payload.articleId].fitler(
            (comment) => comment.commentId !== action.payload.commentId
        );
    }),
    [UPDATE]: (state, action) => produce(state, (draft) => {
        const data = action.payload.content
        draft.list[action.payload.articleId] = [[action.payload.articleId][action.payload.commentId] = data, ...draft.list[action.payload.articleId]]
    }),
}, initialState)

const commentsActions = {
    commentsLOAD,
    commentsCreateDB,
    commentsDeleteDB,
    commentsUpdateDB,
}

export { commentsActions }