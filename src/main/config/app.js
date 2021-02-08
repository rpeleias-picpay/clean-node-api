const express = require('express')
const app = express()
const setupApp = require('./setup')
const setupRoute = require('./routes')

setupApp(app)
setupRoute(app)

module.exports = app
