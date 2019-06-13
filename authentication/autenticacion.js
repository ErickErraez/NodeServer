const jwt = require('jsonwebtoken');

let validaToken = (req, res, next) => {
    let opciones = JSON.parse(process.env.OPCIONESJWT);
    delete opciones.expiresIn;
    delete opciones.algorithm;
    delete opciones.keyid;
    console.log(opciones);

    let tokenRecibido = req.headers.authorization.replace(/['"]+/g,"");
    jwt.verify(tokenRecibido, process.env.CLAVEJWT, opciones, (error) => {
        if(error){
            console.log(error);
            return res.status(400).json({
                ok: false,
                error: {
                    titulo: error.name,
                    mensaje: error.message
                }
            });
        }else{
            next();
        }
    });
};

module.exports = {
    validaToken
};
