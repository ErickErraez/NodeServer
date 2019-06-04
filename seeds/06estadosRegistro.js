
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.estadosRegistro').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.estadosRegistro').insert([
        {
          descripcion: 'Reiniciar',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Activo',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Inactivo',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
