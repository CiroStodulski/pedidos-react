import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Tab extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }



    render() {
        const pedidos = this.props.pedidos;
        // const updatePedido = this.props.updatePedido;
        const removePedido = this.props.removePedido;
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => {
                        return (
                            <tr key={pedido._id}>
                                <th scope="row">{pedido.codigo}</th>
                                <th scope="row center" >
                                    {/* <Button color="primary" onClick={() => updatePedido(pedido)} >editar</Button>{' '} */}
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

export default Tab;