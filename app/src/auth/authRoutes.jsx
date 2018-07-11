import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Main from '../components/core/Main';
import Login from '../components/login/Login';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/" />
    </Router>
)




