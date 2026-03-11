const foodpartnermodel = require("../models/food.partner.model");
const jwt = require("jsonwebtoken");

async function authfoodpartnermiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized access plese logon first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECREATE);

  const food = await foodpartnermodel.findOne(decoded.id)

    req.foodpartner = food
  next()


  } catch (error) {
    return res.status(400).json({
      messsage: "invalid token",
    });
  }
}


module.exports = {authfoodpartnermiddleware}