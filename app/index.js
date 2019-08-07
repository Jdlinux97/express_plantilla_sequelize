const express = require('express');
const cors = require('cors')
require('dotenv').config()

//Importando los archivos de la ruta
const ruta = require('./routes/')


const app = express();


// Configuracion del servidor
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Json");
  next();
});

//Archivos de rutas del servicio
app.use('/api', ruta);




// Ruta de error
app.use((err, req, res, next) => {
  res.status(400).json({
    error: err.message
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Service up in the port ${process.env.PORT}`)
  console.log('Press Ctrl+C to quit.');
})


// module.exports = app;