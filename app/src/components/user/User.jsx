import React, { Component } from 'react';
import Fild from '../core/filde/filde'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = { pedidos: '' };
    }

    render() {
        return (
            <div>
                <Fild title="Users" />
            </div>
        );
    }

}

export default User;