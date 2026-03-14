const usermodel = require('../models/auth.model')


  
 async function registeruser(req , res) {

  try {

  const {fullname ,email , password } = req.body

  if(!fullname || !email  || !password) {
    return res.status(400).json({
      message: "all fields are required"
    })
  }

  const isUserAlreadyExists = await  usermodel.findOne({
    email
  })

  



} catch (error) {
  console.log("server error")
}

}