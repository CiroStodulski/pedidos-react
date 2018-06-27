import React, { Component } from 'react';

class Tab extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        const pedidos = this.props.pedidos;
        console.log(pedidos)
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
                                <th scope="row">botoes</th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        );
    }

}

export default Tab;