const express = require('express')
const app = express()

const indexRoutes = require('./index/indexAPI')

app.use(indexRoutes)

module.exports = app
