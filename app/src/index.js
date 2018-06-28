import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootPedidosReactReducer from './state/reducers/pedidosReactReducer';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootPedidosReactReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
