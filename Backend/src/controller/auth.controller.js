const registerusermodel = require("../models/auth.model");


const registeruser = (req, res) => {
  try {
    const { fullneam, email, password } = req.body;

    if (!fullneam || !email || !password) {
      return res.status(400).json({
        message: "everything is required"
      });
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = {registeruser}