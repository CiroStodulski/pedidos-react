import AuthService from '../services/AuthService';

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
    let body = { login : event.target.email.value, password: event.target.password.value }
    const res = await AuthService.login(body);
    if (res.auth) {
        console.log(res.auth, 'autenticado');
    }
    else {
        console.log(res.auth, 'não autenticado');
    }
    // return dispatch => {
    //     dispatch({
    //         type: 'PASSWORD_CHANGE',
    //         payload: event.target.value
    //     })
    // }
}