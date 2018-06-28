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

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootPedidosReactReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
