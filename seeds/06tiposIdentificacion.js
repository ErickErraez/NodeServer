
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposIdentificacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposIdentificacion').insert([
        {
          descripcion: 'Cédula',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Pasaporte',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Carné Refugiado',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Otro',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};