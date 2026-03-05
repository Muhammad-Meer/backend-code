const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const foodpartnermodel = require('../models/food.partner')

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


async function logoutuser(req, res) {
  try {
    res.clearCookie("token");  // correct function
    res.status(200).json({
      message: "User logged out successfully"
    });
  } catch (error) {
    console.error("Logout Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
}


async function foodpartnerregister(req, res) {
  const {neamm, email, password} = req.body
  
const isaccountexist = await foodpartnermodel.findOne({
  email
})

if(isaccountexist) {
  res.status(400).json({
    message: "user is already exist"
  })
}

const hashpassword = await bcrypt.hash(password, 10)

const foodpartnercreate = await foodpartnermodel.create({
   neamm,
   email,
   password: hashpassword
})


   const token = jwt.sign({
    id: foodpartnercreate._id
   }, process.env.SECREATE)

   res.cookie('token', token)


   res.status(200).json({
    message: "foodpartner create successfully",
    id: foodpartnercreate._id,
    neamm: foodpartnercreate.neamm,
    email: foodpartnercreate.email,
   })
}


async function foodpartnerlogin(req, res) {
  const {neamm, email, password} = req.body

  const isaccountalreadyexist = await foodpartnerlogin.findOne({
    email
  })

  if(!isaccountalreadyexist) {
    res.status(400).json({
      message: "user is not found"
    })
    

    const ispasswordvalid = bcrypt.compare(password, foodpartnercreate.password)

    if(!ispasswordvalid) {
      res.status(400).json({
        
      })
    }



  }
}
module.exports = { userregister, userlogin, logoutuser, foodpartnerregister };