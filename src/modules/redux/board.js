import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

// action
/// articles
const LOAD = 'article/LOAD';
const DELETE = 'article/DELETE';
const ADD = 'article/ADD';
const EDIT = 'article/EDIT';
const DETAIL = 'article/DETAIL';

/// comments
const COMMENTLOAD = 'comment/LOAD';
const COMMENTDELETE = 'comment/DELETE';
const COMMENTCREATE = 'comment/CREATE';
/// like
const LIKE = 'article/LIKE';



// action creator
/// article
const detailArticle = createAction(DETAIL, (article) => ({article}));
const loadArticle = createAction(LOAD, (articles) => ({articles}));
const deleteArticle = createAction(DELETE, (articleId) => ({articleId}));
const addArticle = createAction(ADD, (article) => ({article}));
const editArticle = createAction(EDIT, (boardId,board) => ({boardId,board}))
/// comments
const loadComment = createAction(COMMENTLOAD, (comments) => ({comments}));
const createComment = createAction(COMMENTCREATE, (index,newComment) => ({index,newComment}));
const deleteComment = createAction(COMMENTDELETE, (index,commentId) => ({index,commentId}));
/// like
const togglelike = createAction(LIKE, (like) => ({like}));

// initialState
const initialState = {
    list: [],
    commentlist:[],
    detail: [],
    board: null,
}

const toggleLikeDB = (articleId, idx) => {
    return function(dispatch,getState,{history}){
        apis
        .like(articleId)
        .then((res) => {
            dispatch(togglelike(res.data));
            dispatch(loadBoardDB())
            dispatch(detailArticleDB(articleId))
        })
    }
}

const createCommentDB = (articleId,comment,index) => {
    return function(dispatch, getState, {history}){
        apis
        .AddComment(articleId,comment)
        .then((res) => {
            const newComment = res.data
            dispatch(createComment(index,newComment))
            dispatch(loadBoardDB())
            dispatch(detailArticleDB(articleId))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const deleteCommentDB = (articleId,commentId,index) => {
    return function(dispatch, getState, {history}){
        apis
        .DelComment(articleId,commentId)
        .then((res) => {
            dispatch(deleteComment(index,commentId))
            dispatch(loadBoardDB())
            dispatch(detailArticleDB(articleId))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const deleteArticleDB = (articleId) => {
    return function(dispatch, getState, {history}){
        apis
        .DelArticles(articleId)
        .then((res) => {
            dispatch(deleteArticle(articleId))
            history.replace('/');
        }).catch((err) => {
            console.log(err)
        })
    }
}

const detailArticleDB = (articleId) => {
    return function(dispatch, getState, {history}){
        apis
        .DetailArticle(articleId)
        .then((res) => {
            dispatch(detailArticle(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const loadBoardDB = () => {
    return function (dispatch, getState, {history}){
        apis
        .articles()
        .then((res) => {
            dispatch(loadArticle(res.data))
            const commentsList = []
            res.data.map((list) => {
                commentsList.push(list.comments)
                // dispatch(loadComment(list.articleId, list.comments))
            })
            dispatch(loadComment(commentsList))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const addBoardDB = (contents) => {
    return function(dispatch, getState, {history}){
        apis
        .AddArticles(contents)
        .then((res) => {
            dispatch(addArticle(res.data))
            history.push('/')
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
            dispatch(editArticle(boardId,board))
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })
    }
}

export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.articles
    }),
    [DETAIL]: (state, action) => produce(state, (draft) => {
        draft.detail = action.payload.article;
    }),
    [DELETE]: (state, action) => produce(state, (draft) => {
        draft.list = draft.list.filter((article) => article.articleId !== action.payload.articleId)
    }),
    [COMMENTLOAD]: (state, action) => produce(state, (draft) => {
       draft.commentlist = action.payload.comments
    }),
    [COMMENTCREATE]: (state, action) => produce(state, (draft) => {
        draft.commentlist[action.payload.index] = action.payload.newComment
    }),
    [COMMENTDELETE]: (state, action) => produce(state, (draft) => {
        
    }),
    [ADD]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.article)
    }),
    [EDIT]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post }; 
    }),
}, initialState)

const boardActions = {
    loadBoardDB,
    deleteArticleDB,
    createCommentDB,
    deleteCommentDB,
    toggleLikeDB,
    addBoardDB,
    editBoardDB,
    detailArticleDB,
}

export { boardActions }