import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const LOAD = 'comments/LOAD';
const CREATE = 'comments/CREATE';
const DELETE = 'comments/DELETE';
const UPDATE = 'comments/UPDATE';

const initialState = {
    list: [],
    comment: null,
}

const commentsLOAD = createAction(LOAD, (comments) => ({comments}));

export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.comments;
    })
}, initialState)

const commentsActions = {
    commentsLOAD,
}

export { commentsActions }