const jwt = require('jsonwebtoken');

let crearToken = (credencial) => {
    // let opciones = process.env.OPCIONESJWT || { expiresIn: 60 * 20, algorithm: 'HS256', jwtid: '5', keyid: '5' };
    let token = jwt.sign(credencial, process.env.CLAVEJWT, JSON.parse(process.env.OPCIONESJWT)); 
    return token;
};

module.exports = {
    crearToken
};
