const { Schema, model } = require('mongoose');
const Pelicula = require('./pelicula');

const pedidoSchema = new Schema({
    idCliente: { type: String, required: false },
    fecha: { type: Date, required: false },
    peliculas: { type: [String], required: false },
    precio: { type: Number, required: false }
}, {
    versionKey: false
})

module.exports = model('Pedido', pedidoSchema);