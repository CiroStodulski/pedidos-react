
const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    codigo: {
        type: String,
        required: true
    },
});
schema.plugin(mongoosePaginate);
mongoose.model('pedidos', schema);