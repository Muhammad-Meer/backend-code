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
      fullneam: user.fullneam,
      email: user.email,
      password: hashedpassword
    })

  } catch (error) {
    console.log(error);
  }
};



   const loginuser =  async (req , res) => {  

    const {  email, password } = req.body;

    const user = await registerusermodel.findOne({
      email
    })

    if(!user) {
      return res.status(400).json({
        message: "invalid email or password"
      })
    }


    const ispasswordismatched = await bcrypt.compare(password, user.password)


    if(ispasswordismatched) {
      return res.status(400).json({
        message: "invalid email and password"
      })
    }

    const token = jwt.sign({
      id: user._id,
    },process.env.SECREATE)

    res.cookie("token", token)


    res.status(200).json({
      message: "user looged in successfully",
      user: {

        _id: user._id,
        email: user.email,
        fullneam: user.fullneam
      
      }

    })
  }



module.exports = { registeruser, loginuser };
