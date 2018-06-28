import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changePedido, addPedido } from '../../../state/acitons/pedidosReactActions.js'

import { Button } from 'reactstrap';


class FormPedido extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        const {addPedido, pedido, changePedido} = this.props;

        return (
            <form>
                <div className="row">
                    <div className="col-sm-9">
                        <input id='pedido' className='form-control'
                            placeholder='Adicione um pedido'
                            onChange={changePedido}
                            value={pedido.codigo}></input>
                    </div >
                    <div className="col-sm-2" >
                        <Button color="success" onClick={() => addPedido(pedido.codigo)} >adicionar</Button>{' '}
                    </div>
                </div>
                <br />
            </form>
        );
    }

}
const mapStateToProps = state => ({ pedido: state.pedidos.pedido });
const mapDispatchToProps = dispatch => bindActionCreators({ changePedido, addPedido }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(FormPedido);