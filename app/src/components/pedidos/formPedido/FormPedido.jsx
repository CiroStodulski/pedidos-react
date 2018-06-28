import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Button } from 'reactstrap';

class FormPedido extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        const addPedido = this.props.addPedido;

        return (
            <form>
                <input id='pedido' className='form-control'
                    placeholder='Adicione um pedido'
                    onChange={this.props.handleChangePedido}
                    value={this.props.pedido.codigo}></input>
                <Button color="success" onClick={() => addPedido()} >adicionar</Button>{' '}
            </form>
        );
    }

}
const mapStateToPros = state => ({ pedido: state.pedidos.pedido });

export default connect(mapStateToPros)(FormPedido);