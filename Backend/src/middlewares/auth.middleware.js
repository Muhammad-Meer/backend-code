const foodmodel = require('../models/foodmodel')
const jwt = require('jsonwebtoken')


async function authfoodmiddleeare(req , res , next ) {
  const token = req.cookies.token;

  if(!token) {
   return res.status(401).json({
       message: "plese first login"
    })
  }
}  
