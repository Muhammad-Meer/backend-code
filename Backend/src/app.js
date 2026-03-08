const express = require('express')
const authrouter = require('../src/routes/auth.routes')

const app = express()


require('dotenv').config();
app.use('/api/auth',authrouter)






module.exports = app