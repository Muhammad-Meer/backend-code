 const  usermodel = require('../models/user.model')


  async function userregister(req , res) {
   const {fullNeam , email, password} = req.body;

    const emailisalreadyexist = await usermodel.findOne({
      email
    })


    if(emailisalreadyexist) {
      return res.status(400).json({
        message: "email is already exist"
      })
    }

    const hash = ""

 }

 module.exports = userregister