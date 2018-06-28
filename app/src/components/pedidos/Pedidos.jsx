import React, { Component } from 'react';
import Fild from '../core/filde/filde'
import ListPedidos from './listPedidos/ListPedidos'
import NovoPedido from './formPedido/FormPedido';

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <Fild title="Pedidos" />
                <NovoPedido />
                <ListPedidos />
            </div>
        );
    }

}

export default Pedidos;