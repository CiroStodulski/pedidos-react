import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changePedido, addPedido, atualizarChangePedido , findPedido} from '../../../state/acitons/pedidosReactActions.js'

import { Button } from 'reactstrap';


class FormPedido extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    /// continuar o update
    renderInput(pedido, changePedido, atualizarChangePedido) {
        if (pedido.edit) {
            return (
                <input id='pedido' className='form-control'
                    placeholder='Atualize seu pedido'
                    onChange={atualizarChangePedido}
                    value={pedido.codigo}>
                </input>
            )
        }
        else {
            return (
                <input id='pedido' className='form-control'
                    placeholder='Adicione um pedido'
                    onChange={changePedido}
                    value={pedido.codigo}>
                </input>
            )
        }
    }

    render() {
        const { addPedido, pedido, changePedido, atualizarChangePedido , findPedido} = this.props;
        const renderInput = this.renderInput;
        return (
            <form>
                <div className="row">
                    <div className="col-sm-7">
                        {renderInput(pedido, changePedido, atualizarChangePedido)}
                    </div >
                    <div className="col-sm-2" >
                        <Button color="info" onClick={() => findPedido(pedido)} >{'Pesquisa'}</Button>{' '}
                    </div>
                    <div className="col-sm-2" >
                        <Button color="success" onClick={() => addPedido(pedido, pedido.edit)} >{pedido.edit ? 'atualizar' : 'adicionar'}</Button>{' '}
                    </div>
                </div>
                <br />
            </form>
        );
    }

}
const mapStateToProps = state => ({ pedido: state.pedidos.pedido });
const mapDispatchToProps = dispatch => bindActionCreators({ changePedido, addPedido, atualizarChangePedido , findPedido }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormPedido);