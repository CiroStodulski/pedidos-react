
const mongoose = require('mongoose');

var schema = mongoose.Schema({

    codigo: {
        type: String,
        required: true
    },
});

mongoose.model('pedidos', schema);