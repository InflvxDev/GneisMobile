const { Schema, model } = require('mongoose');

const habitacionSchema = new Schema({
    nombre: String,
    tipo: String,
    costo: Number,
});


module.exports = model('room', habitacionSchema);