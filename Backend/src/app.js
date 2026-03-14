const express = require('express')
require("dotenv").config()
const router = require('../src/routes/auth.routes')
const app = express()


app.use('/api', router)



module.exports =  app