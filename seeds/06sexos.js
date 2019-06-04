
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.sexos').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.sexos').insert([
        {
          descripcion: 'Hombre',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Mujer',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
