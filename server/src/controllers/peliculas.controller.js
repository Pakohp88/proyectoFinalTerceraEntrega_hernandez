const peliculasController = {}
const Pelicula = require('../models/pelicula');

peliculasController.createPelicula = async(req, res) => {
    const newPelicula = new Pelicula(req.body)
    await newPelicula.save();
    res.json({ message: 'Pelicula creada' });
}

peliculasController.editPelicula = async(req, res) => {
    const editPelicula = new Pelicula(req.body)
    await Pelicula.findByIdAndUpdate(req.params.id, editPelicula);
    res.json({ status: "Pelicula actualizada" });
}

peliculasController.getPeliculas = async(req, res) => {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
}

peliculasController.getPelicula = async(req, res) => {
    const pelicula = await Pelicula.findById(req.params.id);
    res.json(pelicula);
}

peliculasController.deletePelicula = async(req, res) => {
    await Pelicula.findByIdAndDelete(req.params.id)
    res.json({ status: "Pelicula borrada" });
}

module.exports = peliculasController;