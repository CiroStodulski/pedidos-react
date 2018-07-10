import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Fild from '../core/filde/filde'

import { changeLogin, changePassword, login } from '../../auth/authAction'

import './login.css';

class Login extends Component {



    render() {
        const { changeLogin, changePassword, auth } = this.props;
        return (
            <div>
                <Fild title="Login"/>
                <form className="login"  onSubmit={this.props.login} >
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
            </div>
        );
    }

}
const mapStateToProps = state => ({ auth: state.auth.login });
const mapDispatchToProps = dispatch => bindActionCreators({ changeLogin, changePassword, login }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
