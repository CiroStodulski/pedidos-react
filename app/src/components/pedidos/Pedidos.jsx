import React, { Component } from 'react';
import Fild from '../core/filde/filde'
import ListPedidos from './listPedidos/ListPedidos'
import NovoPedido from './formPedido/FormPedido';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { validaToken } from '../../auth/authAction'

class Pedidos extends Component {

    componentWillMount() {
        this.props.validaToken(this.props.token);
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

const mapStateToProps = state => ({ token: state.auth.validToken });
const mapDispatchToProps = dispatch => bindActionCreators({validaToken}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Pedidos);