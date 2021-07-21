import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

// action
const LOAD = 'userinfo/LOAD';

// action creators
const userinfoLoad = createAction(LOAD, (userinfo) => ({userinfo}));

// initialState
const initialState = {
    user: null,
}

// Thunk function
const userInfoLoadDB = () => {
    return function(dispatch, getState, {history}){

    }
}

// reducer
export default handleActions({
    [LOAD]:(state,action) => produce(state, (draft) => {

    })
}, initialState)

const InfoCreators = {
    userInfoLoadDB,
}

export { InfoCreators }