
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.operadorasTelefono').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.operadorasTelefono').insert([
        {
          descripcion: 'CNT',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Claro',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
        ,
        {
          descripcion: 'MoviStart',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Twenty',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
