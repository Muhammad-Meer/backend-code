const  usermodel = require('../models/user.model')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
 const cookie = require('cookie-parser')



  async function userregister(req , res) {
      const { fullName, email, password } = req.body;


      if(!fullName || !email || !password) {
        return res.status(400).json({
          message: "all fields is required"
        })
      }


    const emailisalreadyexist = await usermodel.findOne({
      email
    })


    if(emailisalreadyexist) {
      return res.status(400).json({
        message: "email is already exist"
      })
    }

        const hashedpassword = await bcrypt.hash(password, 10)

        const user = await usermodel.create({
          fullName,
          email,
          password: hashedpassword
        })
  

 }

 module.exports = userregister