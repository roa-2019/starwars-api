const path = require('path')
const express = require('express')

const satelliteRoutes = require('./routes/fruits')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/satellite', satelliteRoutes)

module.exports = server
