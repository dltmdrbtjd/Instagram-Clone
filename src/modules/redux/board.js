import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';
import { imageCreators } from './image';

// action
/// articles
const LOAD = 'article/LOAD';
const DELETE = 'article/DELETE';
const ADD = 'article/ADD';
const EDIT = 'article/EDIT';
/// comments
const COMMENTLOAD = 'comment/LOAD';
const COMMENTDELETE = 'comment/DELETE';
const COMMENTCREATE = 'comment/CREATE';
/// like
const LIKE = 'article/LIKE';



// action creator
/// article
const loadArticle = createAction(LOAD, (articles) => ({articles}));
const deleteArticle = createAction(DELETE, (articleId) => ({articleId}));
const addArticle = createAction(ADD, (articles) => ({articles}));
const editArticle = createAction(EDIT, (id,newArticle) => ({id,newArticle}))
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
    board: null,
}

const toggleLikeDB = (articleId, idx) => {
    return function(dispatch,getState,{history}){
        apis
        .like(articleId)
        .then((res) => {
            dispatch(togglelike(res.data));
            dispatch(loadBoardDB())
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

export const addBoardDB = (content) => {
    return function(dispatch, getState, {history}){
        apis
        .AddArticles(content)
        .then(() => {
            dispatch(addArticle(content))
            history.push('/')
            dispatch(imageCreators.setPreview(null));
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

const editBoardDB = (id,newArticle) => 
    async (dispatch, getState, {history}) =>{
        try {
            await apis.UpdateArticles(id,newArticle);
            dispatch(editArticle(id,newArticle));
            history.goBack();
        }catch (e){
        }
    }


export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.articles
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
        draft.commentlist[action.payload.index] = draft.commentlist[action.payload.index].filter(
            (comment) => comment.commentId !== action.payload.commentId
        )
    }),
    [ADD]: (state, action) => produce(state, (draft) => {
				draft.list.push(action.payload.articles);
			}),
    [EDIT]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.articles
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
}

export { boardActions }