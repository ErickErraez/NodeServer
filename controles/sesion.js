const token = require('../identificaciones/token');
const cn = require('../configuraciones/conexionDb');

let inicio = (req, res) => {
    
    usuario = 'docente';
    const db = new cn(usuario).conecta();
    let credencial = req.body;

    let tokenCreado = token.crearToken(credencial);
    return res.json({
        ok: 'true',
        data: credencial,
        token: tokenCreado
    });
};

let pruebaToken = (req, res) => {
    const cn = require('../configuraciones/conexionDb');
usuario = 'docente';
const db = new cn(usuario);
    console.log('pruebaToken ok');
    return res.status(200).json({
        ok: true,
        datos: '',
        mensaje: 'Prueba Token Ok'
    });    
};

module.exports = {
    inicio,
    pruebaToken
};

