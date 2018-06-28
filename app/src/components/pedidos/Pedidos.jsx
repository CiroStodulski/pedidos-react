import React, { Component } from 'react';

import Fild from '../core/filde/filde'
import ListPedidos from './listPedidos/ListPedidos'
import NovoPedido from './formPedido/FormPedido';
import PedidoService from '../../services/PedidoService'

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = { pedidos: [], pedido: '' };
        this.getPedidos = this.getPedidos.bind(this);
        this.removePedido = this.removePedido.bind(this);
        this.updatePedido = this.updatePedido.bind(this);
        this.addPedido = this.addPedido.bind(this);
        this.handleChangePedido = this.handleChangePedido.bind(this)
    }

    componentWillMount() {
        this.getPedidos();
    }

    handleChangePedido(e) {
        this.setState({ ...this.state, pedido: e.target.value })
    }

    async getPedidos() {
        const res = await PedidoService.getPedidos();
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

    async  addPedido() {
        const pedido = { codigo: this.state.pedido, user: { _id: "999999", name: "novo", login: "novo@novo.com", senha: "123" } }
        console.log(pedido)
        const res = await PedidoService.addPedido(pedido);
        if (res)
            this.setState({ pedidos: res });
    }

    render() {
        let pedidos = this.state.pedidos;

        return (
            <div>
                <Fild title="Pedidos" bottom={true} />
                <NovoPedido
                    pedido={this.state.pedido}
                    handleChangePedido={this.handleChangePedido}
                    addPedido={this.addPedido}
                />
                <ListPedidos pedidos={pedidos}
                    removePedido={this.removePedido}
                    updatePedido={this.updatePedido}
                />

            </div>
        );
    }

}

export default Pedidos;