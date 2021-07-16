import { createStore, combineReducers, applyMiddleware } from 'redux';


// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
import user from './redux/user';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();
const rootReducer = combineReducers({
    // 추가하실 리듀서들은 여기 넣어주시면 됩니다 ㅎㅎ
	user,
	router: connectRouter(history),
});
const middleware = [thunk.withExtraArgument({ history }), logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { history };
export default store;
