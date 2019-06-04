
exports.seed = function(knex, Promise) {
  return knex.schema.withSchema('sesion')
  .alterTable('credenciales', function(t) {
    t.foreign('idTipoIdentificacion')
     .references('id')
     .on('catalogo.tiposIdentificacion')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idEstadosRegistro')
     .references('id')
     .on('catalogo.estadosRegistro')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idCredenciales_ingreso')
     .references('id')
     .on('sesion.credenciales')
     .onDelete('RESTRICT')
     .onUpdate('RESTRICT')
  });
};
