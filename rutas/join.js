<<<<<<< HEAD
;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.post('/prueba1', pruebaControl.prueba1)
api.post('/delete', pruebaControl.nuevoRegistro)

=======
;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.get('/prueba1', pruebaControl.prueba1)
api.post('/prueba1', pruebaControl.prueba1)

>>>>>>> 510b9fe58b632057260cdc57788377be63de101e
module.exports = api