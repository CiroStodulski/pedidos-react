import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Fild from '../core/filde/filde'
import Container from '../core/container/container'

import { changeLogin, changePassword, login , msgAtencao } from '../../auth/authAction'

import './login.css';

class Login extends Component {

    // componentDidMount(){
    //     this.props.msgAtencao(this.props.tentativa)
    //     console.log(this.props.tentativa)
    // }

    render() {
        
        const { changeLogin, changePassword, auth , login} = this.props;
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
const mapStateToProps = state => ({ auth: state.auth.login , tentativa : state.auth.tentativa});
const mapDispatchToProps = dispatch => bindActionCreators({ changeLogin, changePassword, login, msgAtencao }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
