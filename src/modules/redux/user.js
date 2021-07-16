import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


// 기본 세팅이기때문에 마음껏 바꾸셔서 사용하셔도 됩니다 ㅎㅎ!
// action
const LOGIN = 'user/LOGIN';

// action creator
const setLogin = createAction(LOGIN, (user) => ({user}));

// initialState
const initialState = {
    user: null,
}

// Thunk function
const setLoginDB = () => {
    return function (dispatch,getState,{history}){

    }
}

// reducer
export default handleActions({
    [LOGIN] : (state, action) => produce(state, (draft) => {

    })
}, initialState)

const userCreators = {
    setLoginDB,
}

export { userCreators };

