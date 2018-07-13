import React, { Component } from 'react';
import Fild from '../core/filde/filde'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validaToken } from '../../auth/authAction'

class Home extends Component {


    componentWillMount() {
       this.props.validaToken(this.props.token);
    }

    render() {
        return (
            <div>
                <Fild title="Home" />
            </div>
        );
    }

}

const mapStateToProps = state => ({ token: state.auth.validToken });
const mapDispatchToProps = dispatch => bindActionCreators({ validaToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);



