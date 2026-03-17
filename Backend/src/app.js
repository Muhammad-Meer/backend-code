const express =  require('express')
const cookieParser = require('cookie-parser')
const router = require('../src/routes/auth.routes')
const foodroutes = require('../src/routes/food.routes')
require("dotenv").config()


const app = express()
app.use(cookieParser());
app.use(express.json())

app.use('/api/auth', router)
app.use('/api/food', foodroutes)

module.exports = app