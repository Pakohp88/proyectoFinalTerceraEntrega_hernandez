const mongoose = require('mongoose');

const uri = 'mongodb+srv://coderHouseUser:coderHouse2022@mean-peliculas.h0cah.mongodb.net/peliculasDB?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.log(err));