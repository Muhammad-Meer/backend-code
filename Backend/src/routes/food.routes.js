const express = require('express')
const foodcontroller = require("../controllers/food.controller")
const authmiddleware = require('../middlewares/auth.middleware')



//  post api/food  {protected}

const router = express.Router()


router.post('/',authmiddleware.authfoodmiddleeare,  foodcontroller.createfood)


module.exports = router



 