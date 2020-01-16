/** @format */

const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Importando los archivos de la ruta
const ruta = require('./routes');
require('./config/socket.js')(io);

// Importacion de la conexion con los modelos
const sequelize = require('./config/sequelize');

// Configuracion del servidor

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Midlewares
app.use(function(req, res, next) {
	res.io = io;
	req.sequelize = sequelize;
	next();
});

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Json');
	next();
});

//Archivos de rutas del servicio
app.use(ruta);

// Ruta de error
app.use((err, req, res, next) => {
	res.status(400).json({
		error: err.message,
	});
	next();
});

server.listen(process.env.PORT, () => {
	console.log(`Service up in the port ${process.env.PORT}`);
	console.log('Press Ctrl+C to quit.');
});

// module.exports = app;
