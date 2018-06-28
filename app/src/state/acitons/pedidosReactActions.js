import PedidoService from '../../services/PedidoService';

export const changePedido = event => {
    return dispatch => {
        dispatch({
            type: 'PEDIDO_CHANGE',
            payload: event.target.value
        })
    }
}

export const changeEdit = edit => {
    return dispatch => {
        dispatch({
            type: 'PEDIDO_EDIT',
            payload: edit ? false : true
        })
    }
}

export const loadPedido = async () => {
    const res = await PedidoService.getPedidos();
    if (res) {
        return dispatch => {
            dispatch({
                type: 'PEDIDO_LOAD',
                payload: res
            })
        }
    }
}

export const addPedido = async (novoPedido) => {
    const pedido = { codigo: novoPedido, user: { _id: "999999", name: "novo", login: "novo@novo.com", senha: "123" } }

    const res = await PedidoService.addPedido(pedido);
    if (res) {
        return dispatch => {
            dispatch({
                type: 'PEDIDO_ADD',
                payload: res
            })
        }
    }
}

export const removePedido = async (id) => {
    const res = await PedidoService.removePedido(id);
    if (res) {
        return dispatch => {
            dispatch({
                type: 'PEDIDO_LOAD',
                payload: res
            })
        }
    }
}