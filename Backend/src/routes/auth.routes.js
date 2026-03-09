const express = require('express')
const   registeruser = require('../controller/auth.controller')


const router = express.Router()



router.post('/user/register',registeruser.registeruser)
router.post('/login',registeruser.loginuser)


module.exports =  router
