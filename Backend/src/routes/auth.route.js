const express = require('express')
const authcontroller = require('../controllers/auth.controller')

const router = express.Router()




router.post('/user/register',authcontroller.userregister ) 
router.post('/user/login',authcontroller.userlogin ) 
router.get('/user/logout', authcontroller.logoutuser)
foodpartnerregister()

module.exports = router