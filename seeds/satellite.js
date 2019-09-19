exports.seed = function (knex, Promise) {
    return knex('satellite').insert([
        {id:1, created_at: '12:00', latitude: 0.21101858288835, longitude: 112.88039864145  }
    ])
}
