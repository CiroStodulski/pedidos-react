import { combineReducers } from 'redux';


const rootPedidosReactReducer = combineReducers({
    user: () => ({
        name: 'ricardo de Azevedo',
        login: 'ricardo@gmail.com',
        password: '123'
    }),
    pedidos: () => ({
        pedido: { codigo: 'codigopeloredux', user: { name: 'redux', login: 'redux@redux.com', password: '123' } },
        pedidos: [
            {
                _id: '1', codigo: 'REDUXREACT', user: []
            },
            {
                _id: '2', codigo: 'QQ78QQQQ4', user: []
            }, {
                _id: '3', codigo: 'ERFGG89SD', user: []
            }, {
                _id: '4', codigo: '45GS9RESF', user: []
            }
        ]
    })
})

export default rootPedidosReactReducer;