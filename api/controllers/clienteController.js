const Clientes = require('../models/Cliente.model');

//Agrega un nuevo cliente
exports.nuevoCliente = async (req,res,next)=>{
    const cliente = new Clientes(req.body);
    
    try {
        //Alamcen<ar el registro
        await cliente.save();
        res.json({mensaje:"Se agrego un nuevo cliente"})
    } catch (error) {
        //Si hay un error
        console.log(error);
        next()
    }
}

exports.mostrarClientes = async(req,res,next)=>{
    try {
        const clientes = await Clientes.find({});
        res.json(clientes)
    } catch (error) {
        console.log(error);
        next();
    }
    
}

exports.mostrarCliente = async (req, res, next) => { 
    const cliente = await Clientes.findById(req.params.idCliente);
    if(!cliente){
        res.send({mensaje: "Ese cliente no existe en la base de datos"})
        return next()
    }
    
    res.send(cliente);
}

exports.actualizarCliente =async(req,res,next)=>{

    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id: req.params.idCliente }, req.body, { new: true });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarCliente = async(req,res,next)=>{
    try {
        await Clientes.findOneAndDelete({ _id: req.params.idCliente });
        res.json('El cliente se ha elminiado');
    } catch (error) {
        console.log(error);
        next();
    }
}