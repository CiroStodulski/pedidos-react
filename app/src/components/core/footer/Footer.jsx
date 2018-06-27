import React, { Component } from 'react';
import './footer.css'


class Footer extends Component {

    render() {
        return (
            <footer className="footer navbar-fixed-bottom">
                <div className="conteinar">
                    <div className="row">
                        <div className='col-md-12 '>
                            <p className="text-center ">  © Copyright 2018-06-27 </p>
                        </div>
                    </div>
                </div>
            </footer >
        );
    }

}

export default Footer;