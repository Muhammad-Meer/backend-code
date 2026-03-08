const express = require('express')
const authrouter = require('../src/routes/auth.routes')
require('dotenv').config();


const app = express()
app.use(express.json())




app.use('/api/auth',authrouter)





module.exports = app