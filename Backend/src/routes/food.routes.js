``

const createfood = require('../controller/food.controller')
const authmiddleware = require('../middleware/auth.middleware')
const express = require('express')
const router = express.Router()

// api food
router.post('/', authmiddleware.authmiddleware, createfood.createfood)

module.exports = router