import AuthService from '../services/AuthService';
import { push } from 'react-router-redux'
import { toastr } from "react-redux-toastr";


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
    console.log(res)
    if (res.auth) {
        localStorage.setItem("token", res.token);
        return dispatch => {
            dispatch({ type: 'TOKEN_VALIDATED', payload: res.auth });
            dispatch(push('/#/home'));
            toastr.success("Sucesso", "Bem vindo!")

        }
    }
    else {
        return dispatch => {
            dispatch(push('/login'));
            dispatch({ type: 'TOKEN_VALIDATED', payload: false });
        }
    }
}

export const logoff = () => {
    return dispatch => {
        dispatch(push('/login'));
        dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    }
}


export const validaToken = async (isToken) => {
    if (isToken) {
        return dispatch => {
            dispatch({ type: 'TOKEN_VALIDATED', payload: true })
        }
    }
    else {
        if (localStorage.getItem("token")) {
            // se existe tem que validar o token
            const res = await AuthService.validaToken();
            if (res.auth) {
                return dispatch => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: true })
                }
            } else {
                return dispatch => {
                    dispatch(push('/login'));
                    dispatch({ type: 'TOKEN_VALIDATED', payload: false })
                }
            }

        }
        else {
            // mudar o stato para parecere usuario ou senha invalido
            return dispatch => {
                dispatch({ type: 'TOKEN_VALIDATED', payload: false })
                dispatch(push('/login'));
            }
        }
    }
}

export const msgAtencao = (logado) => {
    if (logado) {
        return dispatch => {
            dispatch({ type: 'TOKEN_VALIDATED', payload: true });   
        }
    } else {
        return dispatch => {
            console.log(logado);
            toastr.success("Atenção", "Você precisa estár autenticado!")
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }

}