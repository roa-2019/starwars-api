const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

function addSatellite(satellite) {
  return db('satellite').insert(satellite)
}



module.exports = {
   addSatellite
}