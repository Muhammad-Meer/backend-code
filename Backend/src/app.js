const express = require('express')
require("dotenv").config()
const router = require('../src/routes/auth.routes')
const app = express()


app.use('/api/auth', router)
app.use(express.json())



module.exports =  app