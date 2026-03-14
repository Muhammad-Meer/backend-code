const express = require('express')
const router = express()
const authcontroller = require('../controller/auth.controller')




router.post('/user/auth', authcontroller.registeruser)

module.exports = router

