
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.generos').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.generos').insert([
        {
          descripcion: 'Masculino',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Femenino',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
