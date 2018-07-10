import PedidoService from '../../services/PedidoService';

export const changePedido = event => {
    return dispatch => {
        dispatch({
            type: 'PEDIDO_CHANGE',
            payload: event.target.value
        })
    }
}

export const atualizarChangePedido = event => {
    return dispatch => {
        dispatch({
            type: 'PEDIDO_ATUALIZAR_CHANGE',
            payload: event.target.value
        });
    }
}

export const findPedido = async (pedido) => {
    const res = await PedidoService.findPedido(pedido);
    return dispatch => {
        dispatch({
            type: 'PEDIDO_LOAD',
            payload: res
        })
    }
}


export const changeEdit = (pedido, edit) => {
    pedido.edit = edit;
    return dispatch => {
        if (edit) {
            dispatch({
                type: 'PEDIDO_EDIT',
                payload: pedido
            })
        } else {
            dispatch({
                type: 'PEDIDO_EDIT',
                payload: pedido
            })
        }
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

export const addPedido = async (novoPedido, edit) => {
    if (!edit) {
        const pedido = { codigo: novoPedido.codigo, user: { _id: "999999", name: "novo", login: "novo@novo.com", senha: "123" } };
        const res = await PedidoService.addPedido(pedido);
        if (res)
            return dispatch => dispatch((loadPedido()));
    }
    else {
        const res = await PedidoService.updatePedido(novoPedido);
        if (res)
            return dispatch => dispatch((loadPedido()));
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


export const updatePedido = async (pedido, edit) => {
    const res = await PedidoService.updatePedido(pedido);
    if (res)
        return dispatch => {
            dispatch(loadPedido())
            dispatch(changeEdit(pedido, edit))
        };
}