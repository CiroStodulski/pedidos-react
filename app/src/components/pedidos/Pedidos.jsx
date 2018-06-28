import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Fild from '../core/filde/filde'
import Tab from '../core/tab/Tab'
import PedidoService from '../../services/PedidoService'

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = { pedidos: [] };
        this.getPedidos = this.getPedidos.bind(this);
        this.removePedido = this.removePedido.bind(this);
        this.updatePedido = this.updatePedido.bind(this);
    }

    componentWillMount() {
        this.getPedidos();
    }

    async getPedidos() {
        const res = await PedidoService.getPedidos();
        console.log(res)
        if (res)
            this.setState({ pedidos: res });
    }

    async removePedido(id) {
        const res = await PedidoService.removePedido(id);
        if (res)
            this.setState({ pedidos: res });
    }

    async updatePedido(pedido) {
        const res = await PedidoService.updatePedido(pedido);
        if (res)
            this.setState({ pedidos: res });
    }

    render() {
        let pedidos = this.state.pedidos;

        return (
            <div>
                <Fild title="Pedidos" bottom={true} />
                <Tab pedidos={pedidos}
                    removePedido={this.removePedido}
                    updatePedido={this.updatePedido}
                />

            </div>
        );
    }

}

export default Pedidos;