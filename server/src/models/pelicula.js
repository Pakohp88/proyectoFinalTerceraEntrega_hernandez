const { Schema, model } = require('mongoose');

const peliculaSchema = new Schema({
    titulo: { type: String, required: true },
    director: { type: String, required: true },
    anio: { type: String, required: true },
    fechaEstreno: { type: String, required: true },
    reparto: { type: String, required: true },
    sinopsis: { type: String, required: true },
    img: { type: String, required: true },
    precio: { type: Number, required: true },

}, {
    versionKey: false
})

module.exports = model('Pelicula', peliculaSchema);