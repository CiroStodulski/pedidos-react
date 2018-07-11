import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Fild from '../core/filde/filde'
import Container from '../core/container/container'

import { changeLogin, changePassword, login } from '../../auth/authAction'

import './login.css';

class Login extends Component {

    componentWillMount(){
    }

    render() {
        
        const { changeLogin, changePassword, auth , login, history} = this.props;
        return (
            <Container>
                <Fild title="Login" />
                <form className="login" onSubmit={login} >
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={auth.login} onChange={changeLogin} placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={auth.password} onChange={changePassword} placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">entrar</button>
                </form>
            </Container>
        );
    }

}
const mapStateToProps = state => ({ auth: state.auth.login });
const mapDispatchToProps = dispatch => bindActionCreators({ changeLogin, changePassword, login }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
