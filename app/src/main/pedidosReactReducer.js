import { combineReducers } from 'redux';
import pedidosReducers from './../state/reducers/pedidosReducers'
import AuthReducer from '../auth/authReducer';
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootPedidosReactReducer = combineReducers({
    user: () => ({
        name: 'ricardo de Azevedo',
        login: 'ricardo@gmail.com',
        password: '123'
    }),
    pedidos: pedidosReducers,
    auth: AuthReducer,
    router: routerReducer,
    toastr : toastrReducer
})

export default rootPedidosReactReducer;