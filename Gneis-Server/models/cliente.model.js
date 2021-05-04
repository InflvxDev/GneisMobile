const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
    cedula: Number,
    nombre: String,
    edad: Number,
    sexo: String,
    correo: String,
    telefono: String
})

module.exports = model('client', clienteSchema);