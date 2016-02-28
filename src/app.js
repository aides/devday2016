const express = require('express');
const bodyParser = require('body-parser');
const indexController = require('./indexController');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(indexController);

module.exports = app;