import AuthService from '../services/AuthService';
import { push } from 'react-router-redux'


export const changeLogin = (event) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN_CHANGE',
            payload: event.target.value
        })
    }
}

export const changePassword = (event) => {
    return dispatch => {
        dispatch({
            type: 'PASSWORD_CHANGE',
            payload: event.target.value
        })
    }
}

export const login = async (event) => {
    event.preventDefault();
    let body = { login: event.target.email.value, password: event.target.password.value }
    const res = await AuthService.login(body);
    if (res.auth) {
        localStorage.setItem("token", res.token);
        return dispatch => {
            dispatch(push('/#/home'));
        }
    }
    else {
        // mudar o stato para parecere usuario ou senha invalido
        console.log(res.auth, 'não autenticado');
    }
    // return dispatch => {
    //     dispatch({
    //         type: 'PASSWORD_CHANGE',
    //         payload: event.target.value
    //     })
    // }
}