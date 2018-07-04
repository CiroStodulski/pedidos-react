import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { loadPedido, removePedido, changeEdit } from '../../../state/acitons/pedidosReactActions.js'
import { Button } from 'reactstrap';

class ListPedidos extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentWillMount() {
        this.props.loadPedido();
    }
    
    render() {
        const {removePedido, pedidos, changeEdit} = this.props;
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th >Codigo</th>
                        <th className="text-center" width="40%">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => {
                        return (
                            <tr key={pedido._id}>
                                <th >{pedido.codigo}</th>
                                <th className="text-center" colSpan="2">
                                    <Button color="primary" onClick={() => changeEdit(pedido, true)} >editar</Button>{' '}
                                    <Button color="danger" onClick={() => removePedido(pedido._id)} >deletar</Button>{' '}
                                </th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        );
    }

}

const mapStateToPros = state => ({ pedidos: state.pedidos.pedidos, pedido: state.pedidos.pedido });
const mapDispatchToProps = dispatch => bindActionCreators({ changeEdit, loadPedido, removePedido }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(ListPedidos);


