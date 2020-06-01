const express = require('express')
const app = express()

require('./database')()

const indexRoutes = require('./index/index-routes')
const usersRoutes = require('./users/users-routes')

app.use(indexRoutes)
app.use(usersRoutes)

module.exports = app
