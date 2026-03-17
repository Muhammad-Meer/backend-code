const createfood = require('../controller/food.controller')

const express = require('express')
const router = express.Router()



// api food

router.post('/', createfood.createfood)
module.exports = router
