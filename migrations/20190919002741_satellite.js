
exports.up = function (knex, Promise) {
    return knex.schema.createTable('satellite', (table) => {
        table.increments('id').primary()
        table.time('created_at')
        table.string('latitude')
        table.string('longtitude')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('satellite')
};
