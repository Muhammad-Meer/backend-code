const express = require('express')
const authcontroller = require('../controllers/auth.controller')

const router = express.Router()


// user auth apis

router.post('/user/register',authcontroller.userregister ) 
router.post('/user/login',authcontroller.userlogin ) 
router.get('/user/logout', authcontroller.logoutuser)



// food partner auth api 

router.post('/food-partner/register',authcontroller.foodpartnerregister)
router.post('/food-partner/login', authcontroller.foodpartnerlogin)
router.post('/food-partner/login', authcontroller.foodpartnerlogout)

module.exports = router