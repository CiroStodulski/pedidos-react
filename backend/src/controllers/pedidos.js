const mongoose = require('mongoose');

module.exports = app => {

    let controller = {};
    const modelPedidos = mongoose.model('pedidos');


    controller.getPedidos = (req, res) => {
        modelPedidos.find()
            .then(result => {
                res.json(result);
            })
            .catch(erro => res.status(500))
    }

    return controller;

}