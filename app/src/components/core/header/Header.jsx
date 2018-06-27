import React, { Component } from 'react';
import NavComponent from '../nav/Nav'
import './header.css'

class Header extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 header">
                        
                    </div>
                </div>
                <div className="row">
                        <NavComponent />
                </div>
            </div>
        );
    }

}

export default Header;