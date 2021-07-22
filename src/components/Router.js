import React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import { BoardEdit,BoardAdd,Home,BoardDetail,Login,SignUp,UserProfile,InfoChange } from '../pages';
// 추가하실 페이지들은 여기 넣어주시면됩니다!ㅎㅎ
const Router = () => {
    return (
        <>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/login' component={Login} exact/>
                <Route path='/signup' component={SignUp} exact/>
                <Route path='/detail/:id' component={BoardDetail} exact />
                <Route path='/userinfo' component={UserProfile} exact />
                <Route path='/userinfo/infoChange' component={InfoChange} exact />
                <Route path='/add' component={BoardAdd} exact/>
                <Route path='/edit/:id' component={BoardEdit} exact/>
                <Route component={Home} exact />
            </Switch>
        </>
    )
}

export default Router;