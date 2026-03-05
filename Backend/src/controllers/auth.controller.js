const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

async function userregister(req, res) {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }

  const emailisalreadyexist = await usermodel.findOne({
    email,
  });

  if (emailisalreadyexist) {
    return res.status(400).json({
      message: "email already exists",
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  const user = await usermodel.create({
    fullName,
    email,
    password: hashedpassword,
  });

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECREATE
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function userlogin(req, res) {
  try {
    const { fullName, email, password } = req.body;

    const user = await usermodel.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const ispasswordmatch = await bcrypt.compare(password, user.password);

    if (!ispasswordmatch) {
      return res.status(400).json({
        message: "password is not matched",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECREATE
    );

    res.cookie("meratoken", token);

    res.status(200).json({
      id: user._id,
      message: "user is logged in",
      name: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
  }
}


async function logoutuser(req, res ) {
  
}

module.exports = { userregister, userlogin, logoutuser };