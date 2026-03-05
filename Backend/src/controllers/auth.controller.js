const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

async function userregister(req, res) {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "all fields is required",
    });
  }

  const emailisalreadyexist = await usermodel.findOne({
    email,
  });

  if (emailisalreadyexist) {
    return res.status(400).json({
      message: "email is already exist",
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
    process.env.SECREATE,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully",
    user:{
      _id: user._id,
      email: email,
      fullName: user.fullName
    }
  });
}







async function userlogin(req , res)   {
  const {fullName, email, password} = req.body


  const user = await usermodel.findOne({
    email
  })

  if(!user) {
    return res.status(400).json({
      message: "user is not exist"
    })
  }

  const ispasswordmetch = await bcrypt.compare(password, user.password);

  if(!ispasswordmetch) {
    return res.status(400).json({
      message: "passwors is not metched"
    })
  }

  const token = await jwt.sign({
    id: user._id
  })
}

module.exports = {userregister, userlogin};
