
exports.seed = function(knex, Promise) {
  return knex.schema.withSchema('catalogo')
  .alterTable('tiposIdentificacion', function(t) {
     t.foreign('idCredenciales_ingreso')
     .references('id')
     .on('sesion.credenciales')
     .onDelete('RESTRICT')
     .onUpdate('RESTRICT')
  })
  .alterTable('estadosRegistro', function(t) {
    t.foreign('idCredenciales_ingreso')
    .references('id')
    .on('sesion.credenciales')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
 })
 .alterTable('roles', function(t) {
    t.foreign('idCredenciales_ingreso')
    .references('id')
    .on('sesion.credenciales')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  })
  .alterTable('tiposSangre', function(t) {
    t.foreign('idCredenciales_ingreso')
    .references('id')
    .on('sesion.credenciales')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  });
};
