
const mongoose = require('mongoose');

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('users', schema);