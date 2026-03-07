const foodmodel = require("../models/foodmodel");
const jwt = require("jsonwebtoken");

async function authfoodmiddleeare(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "plese first login",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECREATE);
    const foodpartner = await foodmodel.findById(decoded.id);

    req.foodpartner = foodpartner;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalild token ",
    });
  }
}

module.exports = {authfoodmiddleeare}
