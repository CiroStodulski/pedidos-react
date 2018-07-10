const mongoose = require('mongoose');

module.exports = app => {

    let controller = {};
    const modelPedidos = mongoose.model('pedidos');

    controller.getPedidos = (req, res) => {
        modelPedidos.paginate({}, { offset: 0, limit: 4 })
            .then(result => res.json(result.docs))
            .catch(erro => res.status(500));
    }

    controller.addPedido = (req, res) => {
        modelPedidos.insertMany(req.body)
            .then(result => controller.getPedidos(req, res))
            .catch(erro => res.status(500));
    }

    controller.getPedido = (req, res) => {
        modelPedidos.findOne(req.params.id)
            .then(result => res.json(result))
            .catch(erro => res.status(500));
    }

    controller.removePedido = (req, res) => {
        modelPedidos.remove({ _id: req.params.id })
            .then(result => controller.getPedidos(req, res))
            .catch(erro => res.status(500));
    }

    controller.updatePedido = (req, res) => {
        modelPedidos.updateOne({ _id: req.params.id }, req.body)
            .then(result => controller.getPedidos(req, res))
            .catch(erro => res.status(500));
    }

    controller.findPedido = (req, res) => {
        const codigo = req.body.codigo;
        modelPedidos.find({ codigo: new    RegExp(codigo, "i") })
            .then(result => {
                res.json(result);
            })
            .catch(erro => console.log(erro));
    }


    return controller;

}