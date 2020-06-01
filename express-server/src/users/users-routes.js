const express = require('express')
const router = express.Router()
const usersController = require('./users-controller')

router.post('/users', usersController.postUser)

module.exports = router