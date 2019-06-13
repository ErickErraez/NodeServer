const cn = require("../configuraciones/conexionDb");
const bcrypt = require("bcrypt");

let crea = (req, res) => {
    let x = 0;
    let registros = [];
    let errores = [];
    let contador = 0;
    let datos = JSON.parse(req.body.datos);
    datos.cuenta.columnas.push('fecharegistro');
    console.log(datos.cuenta.columnas);
    const dbInicio = new cn(datos.usuarioDb);
    let db = dbInicio.conecta();
    datos.cuenta.valores.forEach((element, index) => {
        element[7] = bcrypt.hashSync(element[7], 10);
        db.task(async t => {
            const resultado = await t.one('SELECT COUNT(*) FROM sesion.credenciales WHERE identificacion = $1 OR emailinstitucional = $2', [element[1], element[6]] );
            if(resultado.count == 0){
                try {
                    const hoy = new Date();
                    element.push(hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDay() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds());
                    await t.none("BEGIN");
                    
                    //console.log(element);
                    const cuenta = await t.one("INSERT INTO sesion.credenciales($1~) VALUES ($2:csv) RETURNING _id, primernombre, segundonombre, apellidopaterno, apellidomaterno", [datos.cuenta.columnas, element]);
                    datos.rol.valores[index][0] = cuenta._id;
                    const idRol = await t.one("INSERT INTO sistema.credencialRoles($1~) VALUES ($2:csv) RETURNING idRol", [datos.rol.columnas, datos.rol.valores[index]]);
                    await t.none("COMMIT");
                    const rol = await t.one("SELECT descripcion FROM sistema.roles WHERE _id = $1", idRol.idrol);
                    registros.push([cuenta, rol]);
                } catch (error) {
                    await t.none("ROLLBACK");
                    await t.none("COMMIT");
                    element.splice(7,6);
                    errores.push([
                        element,
                        error
                    ]);
                };
            } else {
                element.splice(7,6);
                errores.push([
                    element,
                    'Identificación o email duplicados'
                ]);
            }
            contador ++;
            db = dbInicio.desconecta();
            if ((datos.cuenta.valores.length) == contador) {
                db = dbInicio.desconecta();
                return res.status(200).json({
                    ok: true,
                    data: {
                        registros,
                        errores
                    },
                    mensaje: `${registros.length} cuentas creadas, ${errores.length} errores`
                });
            }
        });
    });
};

module.exports = {
    crea
};




