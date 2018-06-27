import React, { Component } from 'react';
import Fild from '../core/filde/filde'
import Tab from '../core/tab/Tab'
import PedidoService from '../../services/PedidoService'

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = { pedidos: '' };
        this.carregarPedidos = this.carregarPedidos.bind(this);
    }

    componentDidMount() {
        this.carregarPedidos();
    }

     carregarPedidos() {
        const res =  PedidoService.getPedidos();
        this.setState({ pedidos: res });
    }

    render() {
        let pedidos = [];
        if (this.state.pedidos ? this.state.pedidos : '') {
            pedidos = this.state.pedidos;
        }
        return (
            <div>
                <Fild title="Pedidos" />
                <Tab pedidos={pedidos} />
            </div>
        );
    }

}

export default Pedidos;