const express = require('express'),
    app = express(),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    helmet = require('helmet');

app.set('secret','secretWord2018')

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
    .include('./config/db')
    .then('./src/models')
    .then('./src/controllers')
    .then('./src/routes')
    .into(app);

module.exports = app;
