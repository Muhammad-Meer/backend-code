const mongoose = require('mongoose')


const foodpartnescheema = new mongoose.Schema({
  neamm: {

    type: String,
    required: true,
  },

  
  email: {

    type: String,
    required: true,
    unique: true,
  },

  password: {

    type: String,
    required: true,
  },


})

  const foodpartnermodel = mongoose.model("foodpartner", foodpartnescheema)


  module.exports = foodpartnermodel
