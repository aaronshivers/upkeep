const express = require('express')
const app = express()

const indexRoutes = require('./routes/index/index')

app.use(indexRoutes)

module.exports = app