const authrouter = require('../src/routes/auth.routes')
const cookieparser = require('cookie-parser')
const express = require('express')
require('dotenv').config();


const app = express()
app.use(express.json())
app.use(cookieparser())




app.use('/api/auth',authrouter)
app.use('/',authrouter)





module.exports = app