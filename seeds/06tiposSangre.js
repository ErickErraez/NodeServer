
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposSangre').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposSangre').insert([
        {
          descripcion: 'A+',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'A-',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'B+',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'B-',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'AB+',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'AB-',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'O+',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'O-',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
