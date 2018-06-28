const mongoose = require('mongoose');

module.exports = app => {

    let controller = {};
    const modelPedidos = mongoose.model('pedidos');


    controller.getPedidos = (req, res) => {
        modelPedidos.paginate({}, { offset: 0, limit: 4 })
            .then(result => res.json(result.docs))
            .catch(erro => res.status(500))
    }

    controller.addPedido = (req, res) => {
        modelPedidos.insertMany(req.body)
            .then(result => controller.getPedidos(req, res))
            .catch(erro => res.status(500))
    }

    controller.getPedido = (req, res) => {
        modelPedidos.findOne(req.params.id)
            .then(result => res.json(result))
            .catch(erro => res.status(500));
    }

    controller.removePedido = (req, res) => {
        modelPedidos.remove({ _id: req.params.id })
            .then(result => controller.getPedidos(req, res))
            .catch(erro => res.status(500))
    }

    controller.updatePedido = (req, res) => {

    }

    return controller;

}