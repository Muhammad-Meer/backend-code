const usermodel = require('../models/auth.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
  
 async function registeruser(req , res) {

  try {

  const {fullname ,email , password } = req.body;

  if(!fullname || !email  || !password) {
    return res.status(400).json({
      message: "all fields are required"
    })
  }

  const isUserAlreadyExists = await  usermodel.findOne({
    email
  })


  if(isUserAlreadyExists) {
    return res.status(400).json({
      message: "account is alredy exist"
    })
  }

  const hashedpassword =  await bcrypt.hash(password, 10)


  const user = await usermodel.create({
   fullname,
   email,
   password: hashedpassword
  })

  const token = jwt.sign({
    id: user._id,
  }, process.env.SECRET, {expiresIn : "5d"})

  res.cookie("token" , token)
  

  return res.status(201).json({
    message: "user create successfully",
    fullname: user.fullname,
    email: user.email,
    user
  })

} catch (error) {
  console.log(error);
  return res.status(500).json({
    message: "server error"
  });
}
 }


module.exports = {registeruser}