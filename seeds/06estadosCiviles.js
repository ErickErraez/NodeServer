
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.estadosCiviles').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.estadosCiviles').insert([
        {
          descripcion: 'Soltero/a',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Casado/a',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Divorciado/a',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Unión libre',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Viudo/a',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
