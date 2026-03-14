const mongoose = require('mongoose')



const userschema = mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    required: true
  },

},
{
     timestamps: true}
)


module.exports = mongoose.model("user-register", userschema)

