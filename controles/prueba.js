;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let prueba = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let prueba1 = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK21"
    })
}

module.exports = {
    prueba,
    prueba1
}