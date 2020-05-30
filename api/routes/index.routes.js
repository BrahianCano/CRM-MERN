'use strict'
const express = require('express');
const Router = express.Router();
const clienteController = require('../controllers/clienteController');

Router.post('/clientes', clienteController.nuevoCliente);
// Obtener todos los clientes
Router.get('/clientes', clienteController.mostrarClientes);
// MUestra  un cliente en especifico por si _id
Router.get('/clientes/:idCliente', clienteController.mostrarCliente);
//Actualizar cliente
Router.put('/clientes/:idCliente', clienteController.actualizarCliente);
// Eliminar cliente
Router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

module.exports = Router;