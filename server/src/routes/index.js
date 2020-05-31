const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.sayHello)

module.exports = router
