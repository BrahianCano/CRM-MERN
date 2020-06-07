'use strict';
const mongoose = require('mongoose');
let schema = mongoose.Schema;

const userSchema = schema({

    tokenGoogle: String,
    email : String,
    image : String
});

module.exports = mongoose.model('users', userSchema);
