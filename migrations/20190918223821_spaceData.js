
exports.up = function (knex, Promise) {
    return knex.schema.createTable('spaceData', (table) => {
        table.increments('id').primary()
        table.time('created_at')
        table.string('latitude')
        table.string('longtitude')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('spaceData')
};
