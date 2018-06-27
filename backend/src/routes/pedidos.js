module.exports = app => {

    controllerPedidos = app.src.controllers.pedidos;

    app.get('/api/pedidos', controllerPedidos.getPedidos);

}