const userKey = 'token'
const INITIAL_STATE = {
    user: localStorage.getItem(userKey),
    validToken: false,
    login: { login: '', password: '' }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'LOGIN_CHANGE':
            let loginL = Object.assign({}, state.login, { login: action.payload });
            return { ...state, login: loginL }
        case 'PASSWORD_CHANGE':
            let loginC = Object.assign({}, state.login, { password: action.payload });
            return { ...state, login: loginC }
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: action.payload }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, action.payload)
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}