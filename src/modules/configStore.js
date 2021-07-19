import { createStore, combineReducers, applyMiddleware } from 'redux';


// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
import user from './redux/user';
import board from './redux/board';
import comments from './redux/comments';
import like from './redux/like';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();
const rootReducer = combineReducers({
    // 추가하실 리듀서들은 여기 넣어주시면 됩니다 ㅎㅎ
	user,
	board,
	comments,
	like,
	router: connectRouter(history),
});
const middleware = [thunk.withExtraArgument({ history }), logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { history };
export default store;
