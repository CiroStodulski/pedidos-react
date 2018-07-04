import axios from 'axios';
import API from './api';
export default class PedidoService {

    static async getPedidos() {
        let resp;
        try {
            resp = await axios.get(`${API.dev}/pedidos`).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async removePedido(id) {
        let resp;
        try {
            resp = await axios.delete(`${API.dev}/pedidos/${id}`).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async updatePedido(pedido) {
        let resp
        try {
            resp = await axios.put(`${API.dev}/pedidos/${pedido._id}`, pedido).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }


    static async addPedido(pedido) {
        let resp
        try {
            resp = await axios.post(`${API.dev}/pedidos`, pedido).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async findPedido(pedido) {
        let resp
        try {
            resp = await axios.post(`${API.dev}/pedidos/pesquisa`, { codigo: pedido.codigo }).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }



}