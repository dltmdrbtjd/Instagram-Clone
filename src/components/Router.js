import React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from '../pages/Home';
import BoardDetail from '../pages/Board_Detail';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

// 추가하실 페이지들은 여기 넣어주시면됩니다!ㅎㅎ
const Router = () => {
    return (
        <>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/login' component={Login} exact/>
                <Route path='/signup' component={SignUp} exact/>
                <Route path='/detail/:index' component={BoardDetail} exact />
                <Route component={Home} exact />
            </Switch>
        </>
    )
}

export default Router;