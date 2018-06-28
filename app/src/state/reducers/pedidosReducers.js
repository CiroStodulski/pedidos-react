const INITIAL_STATE = {
    pedido: { codigo: '', user: { name: 'redux', login: 'redux@redux.com', password: '123' }, edit: false },
    pedidos: []
}

export default (state = INITIAL_STATE, aciton) => {
    switch (aciton.type) {
        case 'PEDIDO_LOAD':
            return { ...state, pedidos: aciton.payload,  pedido: { codigo: '' }}
        case 'PEDIDO_CHANGE':
            return { ...state, pedido: { codigo: aciton.payload } };
        case 'PEDIDO_ADD':
            return { ...state, pedido: { codigo: '' }, pedidos: aciton.payload };
        case 'PEDIDO_EDIT':
            return { ...state, pedido: aciton.payload };
        default:
            return { ...state }
    }
}