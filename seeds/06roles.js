
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.roles').insert([
        {
          descripcion: 'Sin rol',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Estudiante',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Docente',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Autoridades',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Secretaría',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Coordinación de carrera',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Investigación',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Vinculación',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Administración',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Académica',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Titulación',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        },
        {
          descripcion: 'Admin Sistema',
          idEstadosRegistro: 2,
          idCredenciales_ingreso: 1
        }
      ]);
    });
};
