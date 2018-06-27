import axios from 'axios';
import API from './api';
export default class PedidoService {

    static getPedidos() {
       return axios.get(`${API.dev}/pedidos`).then(res => res.data);
    }
}