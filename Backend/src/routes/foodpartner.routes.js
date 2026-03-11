const express = require('express');
const foodconttroller = require('../controller/food.controller')
const authmiddleeare = require('../middlewares/auth.middleware')


const router = express.Router()



router.post('/',authmiddleeare.authfoodpartnermiddleware , foodconttroller.createfood)


module.exports = router