const mongoose = require('mongoose')



const foodpartnerschema = mongoose.Schema({
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


const foodpartnermodel = mongoose.model("foodpartner", foodpartnerschema)

module.exports = foodpartnermodel

