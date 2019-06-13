;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.post('/prueba1', pruebaControl.prueba1)
api.post('/delete', pruebaControl.nuevoRegistro)

module.exports = api