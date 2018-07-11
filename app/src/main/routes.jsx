import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../components/home/Home';
import Pedidos from '../components/pedidos/Pedidos';
import User from '../components/user/User';
import Login from '../components/login/Login';
export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/user" component={User} />
        <Redirect from="*" to="/" />
    </Router>
)




