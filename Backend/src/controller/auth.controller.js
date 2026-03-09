const registerusermodel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registeruser = async (req, res) => {
  try {
    const { fullneam, email, password } = req.body;

    if (!fullneam || !email || !password) {
      return res.status(400).json({
        message: "everything is required",
      });
    }

    const isemailalreadyexist = await registerusermodel.findOne({
      email,
    });

    if (isemailalreadyexist) {
      return res.status(400).json({
        message: "user is already exist",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const user = await registerusermodel.create({
      fullneam,
      email,
      password: hashedpassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECREATE,
    );

    res.cookie("token", token);


    res.status(201).json({
      message: "usrer create successfully",
      user: user
    })
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registeruser };
