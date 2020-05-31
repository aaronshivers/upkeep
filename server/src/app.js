const express = require('express')
const app = express()

const indexRoutes = require('./routes')

app.use(indexRoutes)

module.exports = app