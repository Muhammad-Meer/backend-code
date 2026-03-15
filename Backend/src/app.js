const express = require('express')
require("dotenv").config()
const cookieParser = require('cookie-parser');
const router = require('../src/routes/auth.routes')




const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/auth', router)


module.exports =  app