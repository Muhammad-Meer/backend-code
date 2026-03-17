const foodpartnermodel = require("../models/food-partner.model");
const jwt = require("jsonwebtoken");

async function authmiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({
      message: "please login foodpartner",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const foodpartner = await foodpartnermodel.findById(decoded.id);
    req.foodpartner = foodpartner;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "invalid token",
    });
  }
}

module.exports = authmiddleware;