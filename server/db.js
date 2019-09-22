const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

function addSatellite(satellite) {
  return db('satellite').insert(satellite)
}

function getSatellite() {
  return db('satellite').select()
}

module.exports = {
  addSatellite, getSatellite
}