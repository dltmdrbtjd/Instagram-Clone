import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/api';

// action
const LOAD = 'board/LOAD';

// action creator
const loadBoard = createAction(LOAD, (boards) => ({boards}));

// initialState
const initialState = {
    list: [],
    board: null,
}

const loadBoardDB = () => {
    return function (dispatch, getState, {history}){
        apis
        .boards()
        .then((res) => {
            dispatch(loadBoard(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}


export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.boards
    })
}, initialState)

const boardActions = {
    loadBoardDB,
}

export { boardActions }