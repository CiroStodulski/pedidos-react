module.exports = app => {

    controllerPedidos = app.src.controllers.pedidos;

    app.route('/api/pedidos')
        .get(controllerPedidos.getPedidos)
        .post(controllerPedidos.addPedido);

    app.route('/api/pedidos/:id')
        .get(controllerPedidos.getPedido)
        .delete(controllerPedidos.removePedido)
        .put(controllerPedidos.updatePedido);

}