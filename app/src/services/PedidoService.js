import axios from './Interceptador';
import API from './api';
export default class PedidoService {

    static async getPedidos() {
        let resp;
        try {
            resp = await axios.getAxios().get(`${API.dev}/pedidos`).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async removePedido(id) {
        let resp;
        try {
            resp = await axios.getAxios().delete(`${API.dev}/pedidos/${id}`).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async updatePedido(pedido) {
        let resp
        try {
            resp = await axios.getAxios().put(`${API.dev}/pedidos/${pedido._id}`, pedido).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }


    static async addPedido(pedido) {
        let resp
        try {
            resp = await axios.getAxios().post(`${API.dev}/pedidos`, pedido).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }

    static async findPedido(pedido) {
        let resp
        try {
            resp = await axios.getAxios().post(`${API.dev}/pedidos/pesquisa`, { codigo: pedido.codigo }).then(res => res.data).catch(error => false);
        } catch (error) {
            resp = error;
        }
        return resp
    }



}