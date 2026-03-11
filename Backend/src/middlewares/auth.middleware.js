const foodpartnermodel = require('../models/food.partner.model')

async function authfoodpartnermiddleware(req , res , next) {
  

  const token = req.cookies.token;

  if(!token) {
     return res.status(401).json({
     message: "unauthorized access plese logon first"
    })
  }
}