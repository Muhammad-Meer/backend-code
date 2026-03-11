const foodpartnermodel = require("../models/food.partner.model");
const jwt = require("jsonwebtoken");

async function authfoodpartnermiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized access, please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECREATE);

    // findById use karen
    const foodpartner = await foodpartnermodel.findById(decoded.id);

    if (!foodpartner) {
      return res.status(401).json({
        message: "foodpartner not found",
      });
    }

    req.foodpartner = foodpartner;
    next();

  } catch (error) {
    return res.status(400).json({
      message: "invalid token",
    });
  }
}

module.exports = { authfoodpartnermiddleware };