import React, { Component } from 'react';

import Fild from '../core/filde/filde'
import ListPedidos from './listPedidos/ListPedidos'
import NovoPedido from './formPedido/FormPedido';
import PedidoService from '../../services/PedidoService'

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = { pedidos: [], pedido: '' };

        this.updatePedido = this.updatePedido.bind(this);

    }

    async updatePedido(pedido) {
        const res = await PedidoService.updatePedido(pedido);
        if (res)
            this.setState({ pedidos: res });
    }

    render() {

        return (
            <div>
                <Fild title="Pedidos" bottom={true} />
                <NovoPedido />
                <ListPedidos />

            </div>
        );
    }

}

export default Pedidos;