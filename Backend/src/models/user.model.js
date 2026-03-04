const  mongose = require('mongoose')




const userschema = new mongose.Schema({
  fullNeam: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  

  password: {
    type: String,
    required: true,
    unique: true
  },
},{timestamps: true})




const usermodel = mongose.model('userdata',userschema)