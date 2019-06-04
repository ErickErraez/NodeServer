
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('generales')
    .createTable( 'telefonos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredenciales').notNullable();
        t.integer('idOperadoraTelefono').notNullable();
        t.string('numero').notNullable().unique();
        t.string('extencion').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadosRegistro').notNullable();
        t.bigInteger('idCredenciales_ingreso').notNullable();
    })
    .createTable( 'mails', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredenciales').notNullable();
        t.string('descripcion').notNullable().unique();
        t.integer('idTiposMail').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadosRegistro').notNullable();
        t.bigInteger('idCredenciales_ingreso').notNullable();
    })
    .createTable( 'domicilios', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredenciales').notNullable();
        t.integer('idPais').notNullable();
        t.integer('idProvincia').notNullable();
        t.integer('idCanton').notNullable();
        t.integer('idParroquia').notNullable();
        t.string('callePrincipal').notNullable();
        t.string('calleSecundaria').notNullable();
        t.string('lote').notNullable();
        t.string('codigoPostal').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadosRegistro').notNullable();
        t.bigInteger('idCredenciales_ingreso').notNullable();
    })
    .createTable( 'discapacidades', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredenciales').notNullable();
        t.integer('idTipoSangre').notNullable();
        t.integer('porcentaje').notNullable();
        t.string('identificacion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadosRegistro').notNullable();
        t.bigInteger('idCredenciales_ingreso').notNullable();
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.withSchema('generales')
        .dropTableIfExists( 'telefonos' )
        .dropTableIfExists( 'mails' )
        .dropTableIfExists( 'domicilios' )
        .dropTableIfExists( 'discapacidades' );
        
};
