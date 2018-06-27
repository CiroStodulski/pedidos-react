import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Pedidos from '../pedidos/Pedidos';
import Container from './container/container'

export default class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Pedidos" component={Pedidos} />
                        </Switch>
                    </Router>
                </Container>
                <Footer />
            </div>

        );
    }

}