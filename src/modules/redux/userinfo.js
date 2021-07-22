import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

// action
const LOAD = 'userinfo/LOAD';
const PROFILE = 'userinfo/PROFILE'

// action creators
const userinfoLoad = createAction(LOAD, (userinfo) => ({userinfo}));
const profileLoad = createAction(PROFILE, (profile) => ({profile}));

// initialState
const initialState = {
    user: null,
    profile:null,
}

// Thunk function
const userInfoLoadDB = () => {
    return function(dispatch, getState, {history}){
        apis
        .myinfo()
        .then((res) => {
            dispatch(userinfoLoad(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const profileLoadDB = () => {
    return function(dispatch, getState, {history}){
        apis
        .myprofile()
        .then((res) => {
            dispatch(profileLoad(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

// reducer
export default handleActions({
    [LOAD]:(state,action) => produce(state, (draft) => {
        draft.user = action.payload.userinfo;
    }),
    [PROFILE]:(state,action) => produce(state,(draft) => {
        draft.profile = action.payload.profile;
    })
}, initialState)

const InfoCreators = {
    userInfoLoadDB,
    profileLoadDB,
}

export { InfoCreators }