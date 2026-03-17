const foodpartner = require('../models/food.model')
const jwt = require('jsonwebtoken')


async function authmiddleware(req , res , next) {
    
    const token = req.body

  if(!token) {
    return res.status(400).json({
      message: "not access crete food"
    })
  }
    try {

      jwt.verify(token, process.env.)
    } catch (error) {
    console.log(error)
  }
}