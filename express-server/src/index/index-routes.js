const express = require('express')
const router = express.Router()
const indexController = require('./index-controller')

router.get('/', indexController.sayHello)

module.exports = router
