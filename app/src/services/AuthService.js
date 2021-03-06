import axios from 'axios';
import API from './api';

export default class AuthService {

    static async login(dados) {
        let resp;
        try {
            resp = await axios.post(`${API.dev}/login`, dados).then(res => res.data);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async validaToken() {
        let resp;
        try {
            resp = await axios.get(`${API.dev}/validaToken`).then(res => res.data);
        } catch (error) {
            resp = error;
        }
        return resp
    }

}