
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('sesion')
    .createTable( 'credenciales', function( t ) {

        // Primary Key
        t.bigIncrements('id');

        // Data
        t.integer('idTipoIdentificacion').notNullable();
        t.string('identificacion').notNullable().unique();
        t.string('primerNombre').notNullable();
        t.string('segundoNombre').notNullable();
        t.string('apellidoPaterno').notNullable();
        t.string('apellidoMaterno').notNullable();
        t.timestamp('fechaNacimiento').notNullable();
        t.integer('idTipoSangre').notNullable().defaultTo(6);;
        t.integer('idUbicaciones_paisNacimiento').notNullable().defaultTo(132);
        t.integer('idUbicaciones_provinciaNacimiento').notNullable().defaultTo(17);
        t.integer('idUbicaciones_cantonNacimiento').notNullable().defaultTo(204);
        // t.string('email').notNullable().unique();
        // t.string('contrasena').notNullable();
        t.string('semilla').notNullable().unique();
        t.timestamp('fechaCaducidad').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadosRegistro').notNullable();
        t.bigInteger('idCredenciales_ingreso').notNullable();
    })
    .createTable( 'loginTrue', function( t ) {

        // Primary Key
        t.bigIncrements('id');

        // Data
        t.bigInteger('idCredenciales').notNullable();
        t.string('semilla').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('sesion')
            .dropTableIfExists( 'credenciales' );
};
