const mongoose = require('mongoose')


const registeruserscheema = new  mongoose.Schema({
  fullneam:{
  
    type: String,
    required: true
  },
  
  email:{

    type: String,
    required: true,
    unique: true,
  },

  password:{

    type: String,
    required: true
  },
})

const registerusermodel = mongoose.model("user",registeruserscheema)



module.exports = registerusermodel