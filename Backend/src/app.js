const authrouter = require('../src/routes/auth.routes')
const foodroutes = require('../src/routes/foodpartner.routes')
const cookieparser = require('cookie-parser')
const express = require('express')
require('dotenv').config();


const app = express()
app.use(express.json())
app.use(cookieparser())




app.use('/api/auth',authrouter)
app.use('/api/food',foodroutes)





module.exports = app