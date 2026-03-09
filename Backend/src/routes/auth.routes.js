const express = require('express')
const   registeruser = require('../controller/auth.controller')


const router = express.Router()


// user api 
router.post('/user/register',registeruser.registeruser)
router.post('/user/login',registeruser.loginuser)
router.get('/user/logout',registeruser.logoutuser)


router.post('/food-partner-register',registeruser.registerfoodpartner)
router.post('/food-partner-login',registeruser.)
router.get('/food-partner-logout',registeruser.)



module.exports =  router
