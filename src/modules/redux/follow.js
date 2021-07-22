import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

// action
const LOAD = 'follow/LOAD';

// actionCreators
const followLoad = createAction(LOAD, (follow) => ({follow}))

// initialState
const initialState = {
    follow: null,
}

const followLoadDB = () => {
    return function(dispatch, getState, {history}){
        apis
        .recommend()
        .then((res) => {
            dispatch(followLoad(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default handleActions({
    [LOAD]:(state,action) => produce(state, (draft) => {
        draft.follow = action.payload.follow;
    })
}, initialState)

const followCreator = {
    followLoadDB
}

export { followCreator }