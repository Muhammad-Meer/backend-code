const mongoose = require('mongoose')


const foodpartnerschema = new mongoose.Schema({
  fullneam: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullneam: {
    type: String,
    required: true
  }
})


const foodpartnermodel = mongoose.model("user", foodpartnerschema)

module.exports = foodpartnermodel

