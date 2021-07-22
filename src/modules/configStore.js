import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// reducers
import user from './redux/user';
import board from './redux/board';
import like from './redux/like';
import userinfo from './redux/userinfo';
import image from './redux/image';
import follow from './redux/follow';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();
const rootReducer = combineReducers({
	follow,
	user,
	board,
	like,
	userinfo,
	image,
	router: connectRouter(history),
});

const middleware = [thunk.withExtraArgument({ history })];
const store = createStore(rootReducer, applyMiddleware(...middleware));
export { history };

export default store;