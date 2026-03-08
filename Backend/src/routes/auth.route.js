const express = require('express')
const authcontroller = require('../controllers/auth.controller')

const router = express.Router()


// user auth apis

router.post('/user/register',authcontroller.userregister ) 
router.post('/user/login',authcontroller.userlogin ) 
router.get('/user/logout', authcontroller.logoutuser)



// food partner auth api 

router.post('/partner/register',authcontroller.foodpartnerregister)
router.post('/partner/login', authcontroller.foodpartnerlogin)
router.get('/partner/logout', authcontroller.foodpartnerlogout)

module.exports = router