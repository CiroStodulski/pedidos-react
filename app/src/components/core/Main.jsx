import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Routes from '../../main/Routes';
import Container from './container/container'

export default class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Routes />
                </Container>
                <Footer />
            </div>

        );
    }

}