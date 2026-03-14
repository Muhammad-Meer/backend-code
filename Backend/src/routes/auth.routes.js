const express = require('express')
const router = express.Router()
const authcontroller = require('../controller/auth.controller')


// user api 

router.post('/user/register', authcontroller.registeruser)
router.post('/user/login', authcontroller.loginuser)
router.post('/user/loogout', authcontroller.loogoutuser)


// foodpartner api 


router.post('/user/register', authcontroller.registerfoodpartner)
router.post('/user/login', authcontroller.loginfoodpartner)
router.post('/user/loogout', authcontroller.loogoutfoodpartner)



module.exports = router
