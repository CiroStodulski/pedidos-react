import axios from 'axios';
import API from './api';

export default class AuthService {

    static async login(dados) {
        let resp;
        try {
               resp = await axios.post(`${API.dev}/login`, dados).then(res => res.data);
            // resp = await fetch(`${API.dev}/login`,
            //     {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         method: 'POST',
            //         body: JSON.stringify(dados)
            //     });
        } catch (error) {
            resp = error;
        }
        return resp
    }

}