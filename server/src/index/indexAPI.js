const express = require('express')
const router = express.Router()
const indexController = require('./indexController')

router.get('/', indexController.sayHello)

module.exports = router
