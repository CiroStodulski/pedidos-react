import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import rootPedidosReactReducer from './main/pedidosReactReducer';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Messages from './components/core/msg/messages'

import createHistory from "history/createBrowserHistory";

import { ConnectedRouter, routerMiddleware, } from "react-router-redux";


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = applyMiddleware(thunk, multi, promise, middleware)(createStore)(rootPedidosReactReducer)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
                <Messages />
            </div>
        </ConnectedRouter>
    </Provider>

    , document.getElementById('root'));

registerServiceWorker();
