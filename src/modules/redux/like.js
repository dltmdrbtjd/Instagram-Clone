import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

const LIKE = 'article/LIKE';

const AddLike = createAction(LIKE, (like) => ({like}));

const initialState = {
    like: false,
}

const AddLikeDB = (articleId) => {
    return function(dispatch, getState, {history}){
        apis
        .like(articleId)
        .then((res) => {
            dispatch(AddLike(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default handleActions({
    [LIKE]: (state,action) => produce(state, (draft) => {
        draft.like = action.payload.like;
    })
}, initialState)

const LikeCreators = {
    AddLikeDB,
}

export { LikeCreators }