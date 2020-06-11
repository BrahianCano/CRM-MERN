'use strict';
const mongoose = require('mongoose');
let schema = mongoose.Schema;

const userSchema = schema({

    name : String,
    email : String,
    picture : String,
    provider : String,
    verified_email : Boolean,
    uid : String,
    access_token : String

});

module.exports = mongoose.model('users', userSchema);
