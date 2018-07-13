import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../components/home/Home';
import Pedidos from '../components/pedidos/Pedidos';
import User from '../components/user/User';

// para retirar o problema do warning no console
const routes = (
    <Route >
        <Route path="/" component={Home} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/user" component={User} />
        <Redirect from="*" to="/" />
    </Route >
);

export default props => (
    <Router history={hashHistory}>
        { routes }
    </Router>
)




