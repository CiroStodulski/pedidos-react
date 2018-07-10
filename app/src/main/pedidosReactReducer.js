import { combineReducers } from 'redux';
import pedidosReducers from './../state/reducers/pedidosReducers'
import AuthReducer from '../auth/authReducer';

const rootPedidosReactReducer = combineReducers({
    user: () => ({
        name: 'ricardo de Azevedo',
        login: 'ricardo@gmail.com',
        password: '123'
    }),
    pedidos: pedidosReducers,
    auth: AuthReducer
})

export default rootPedidosReactReducer;