import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { deleteCookie, setCookie } from '../../shared/Cookie';
import { apis } from '../../shared/api';


// action
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';


// action creator
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

// initialState
const initialState = {
    user: null,
    is_login: false,
}

// Thunk function

const setLoginDB = (id,pw) => {
    return function (dispatch, getState, { history }) {
        apis
        .login(id,pw)
        .then((res) => {
            setCookie('token', res.data[2].token, 7);
			localStorage.setItem('username',res.data[0].username, 7);
            localStorage.setItem('profileImage',res.data[1].profileImageUrl);
			dispatch(setLogin({id: id,profileImage:res.data[1].profileImageUrl}));
            history.replace('/');
        })
        .catch((err) => {
            window.alert("아이디 및 비밀번호를 다시 확인해주세요.")
        });
    };
};

const registerDB = (email, nick, id, pw) => {
    return function (dispatch, getState, { history }) {
        apis
        .signup(email, nick, id, pw)
        .then((res) => {
            console.log(res)
            history.push('/login');
        })
        .catch((err) => {
            window.alert("이미 존재하는 아이디 및 이메일입니다.")
        });
    };
};

const logOutDB = () => {
    return function (dispatch, getState, { history }) {
            deleteCookie('token');
            localStorage.removeItem('username');
            dispatch(logOut());
            history.push('/login');
    };
};

const loginCheck = () => {
    return function (dispatch, getState, {history}){
        const userId = localStorage.getItem('username');
        const profileImage = localStorage.getItem('profileImage');
        const tokenCheck = document.cookie;
        if(tokenCheck){
            dispatch(setLogin({id: userId,profileImage:profileImage}));
        } else {
            dispatch(logOutDB())
        }
    }
}

// reducer
export default handleActions({
    [LOGIN] : (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOGOUT] : (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
}, initialState)

const userCreators = {
    setLoginDB,
    registerDB,
    logOutDB,
    loginCheck,
    setLogin,
}

export { userCreators };

