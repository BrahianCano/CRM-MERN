'use strict'
const express = require('express');
const Router = express.Router();


Router.get('/', (req,res) => {
    res.status(200).send({message:"Welcome to Home"})
});

module.exports = Router;