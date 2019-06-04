
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposMails').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposMails').insert([
        {
          descripcion: 'Personal',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Institucional',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
