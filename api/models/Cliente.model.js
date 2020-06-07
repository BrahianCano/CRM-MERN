'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    nombre: String,
    apellido: String,
    empresa: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Clientes', clienteSchema);
