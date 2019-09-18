exports.seed = function (knex, Promise) {
    return knex('spaceData').insert([
        {id:1, created_at: '12:00', latitude: 0.21101858288835, longtitude: 112.88039864145  }
    ])
}

table.time('created_at')
table.string('longtitude')
table.string('latitude')