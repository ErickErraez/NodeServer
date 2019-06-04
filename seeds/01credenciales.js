
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sesion.credenciales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sesion.credenciales').insert([
        {
          idTipoIdentificacion: 1,
          identificacion: 1717171717,
          primerNombre: 'admin',
          segundoNombre: 'admin',
          apellidoPaterno: 'admin', 
          apellidoMaterno: 'admin',
          fechaNacimiento: '1999-02-02',
          idTipoSangre: 1,
          idUbicaciones_paisNacimiento: 132,
          idUbicaciones_provinciaNacimiento: 17,
          idUbicaciones_cantonNacimiento: 204,
          // email,
          // contraseña,
          semilla: '123456',
          fechaCaducidad: '9999-12-31',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          idTipoIdentificacion: 1,
          identificacion: 1713121810,
          primerNombre: 'Carlos',
          segundoNombre: 'Alberto',
          apellidoPaterno: 'Andocilla', 
          apellidoMaterno: 'Andrade',
          fechaNacimiento: '1999-02-02',
          idTipoSangre: 1,
          idUbicaciones_paisNacimiento: 132,
          idUbicaciones_provinciaNacimiento: 17,
          idUbicaciones_cantonNacimiento: 204,
          // email,
          // contraseña,
          semilla: '123457',
          fechaCaducidad: '9999-12-31',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
