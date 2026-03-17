const express = require('express')
const router = express.Router()
const authcontroller = require('../controller/auth.controller')

// user api 
router.post('/user/register', authcontroller.registeruser)
router.post('/user/login', authcontroller.loginuser)
router.post('/user/logout', authcontroller.loogoutuser)

// foodpartner api 
router.post('/food-partner/register', authcontroller.registerfoodpartner)
router.post('/food-partner/login', authcontroller.loginfoodpartner)
router.post('/food-partner/logout', authcontroller.loogoutfoodpartner)

module.exports = router