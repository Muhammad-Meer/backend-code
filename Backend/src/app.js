const express = require('express')
require("dotenv").config()
const router = require('../src/routes/auth.routes')




const app = express()
app.use(express.json());



app.use('/api/auth', router)


module.exports =  app