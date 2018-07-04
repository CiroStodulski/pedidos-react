import React, { Component } from 'react';
import NavComponent from '../nav/Nav'
import './header.css'

class Header extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                        <NavComponent />
                </div>
            </div>
        );
    }

}

export default Header;