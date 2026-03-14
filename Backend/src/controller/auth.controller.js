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


 async function loginuser(req , res) {

  try {
    
  
   const {  email , password} = req.body
   console.log("REQ BODY:", req.body)


   const user = await usermodel.findOne({
    email
   })

   if(!user) {
    return res.status(400).json({
      message: "invalid email and password"
    })
   }

   const ispasswordvalid = await bcrypt.compare(password, user.password)

   if(!ispasswordvalid) {
    return res.status(400).json({
      message: "invalid email and password"
    })
   }

   const token = await jwt.sign({
    id: user._id,
   },process.env.SECRET, {expiresIn: "6d"})


   res.cookie("token", token)

   res.status(200).json({
    message: "user login successfully",
    fullname: user.fullname,
    email: user.email
   })

     } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "login user some issue"
      })
  }
 }

 function loogoutuser(req , res) {
    res.clearCookie("token")
     res.status(200).json({
      message: "logout successfully"
    })
 }


 async function registerfoodpartner(params) {
  try {
    
  } catch (error) {
    
  }
 }
 async function loginfoodpartner(params) {
  try {
    
  } catch (error) {
    
  }
 }
  function loogoutfoodpartner(req , res) {
    res.clearCookie("token")
     res.status(200).json({
      message: "logout successfully"
    })
 }
 
module.exports = {registeruser,
  loginuser,
  loogoutuser,
  registerfoodpartner,
  loginfoodpartner,
  loogoutfoodpartner }