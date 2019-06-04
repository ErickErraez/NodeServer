
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.nacionalidades').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.nacionalidades').insert([
        {
          descripcion: 'Indigena',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Afroecuatoriano',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Negro',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Mulato',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Montuvio',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Mestizo',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Blanco',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Otro',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'No registra',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
