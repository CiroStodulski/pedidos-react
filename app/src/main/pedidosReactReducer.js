import { combineReducers } from 'redux';
import pedidosReducers from './../state/reducers/pedidosReducers'

const rootPedidosReactReducer = combineReducers({
    user: () => ({
        name: 'ricardo de Azevedo',
        login: 'ricardo@gmail.com',
        password: '123'
    }),
    pedidos: pedidosReducers
})

export default rootPedidosReactReducer;