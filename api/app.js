'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Routes = require('./routes/index.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Routes);


module.exports = app;