const express = require('express');
const morgan = require('morgan');
const routesPeliculas = require('./routes/peliculas.routes');
const routesPedidos = require('./routes/pedidos.routes')
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', routesPeliculas)
app.use('/api/', routesPedidos)

module.exports = app;