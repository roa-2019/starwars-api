const request = require('superagent')
const express = require('express')
const issId = 25544


const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSatellite()
    .then(satellite => {
      res.json({ satellite })
    })
})


router.post('/', (req, res) => {
  request.get('https://api.wheretheiss.at/v1/satellites/' + issId)
    .then(result => {
      let spaceData = JSON.parse(result.text)
      let satellite = {
        latitude: spaceData.latitude,
        longitude: spaceData.longitude,
        created_at: spaceData.timestamp
      }
      db.addSatellite(satellite)
        .then(() => {
          res.send()
        })
    })
    .catch(e => {
      console.log('error', e)
    })
})

router.delete('/', (req, res) => {
  db.deleteSatelliteData()
    .then(() => {
      res.send()
    })
    .catch(e => {
      console.log('error', e)
    })
})


module.exports = router
