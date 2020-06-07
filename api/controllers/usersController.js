'use strict';
const Users = require('../models/User.model');
exports.sendPayload = async function (req,res,next){
    const user = new Users(req.body);
    try {
        await user.save();
        res.json({mensaje:"Se agrego un nuevo usuario"})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.showUsers = async function(req,res,next){
    try {
        const users = await Users.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        next();
    }

}