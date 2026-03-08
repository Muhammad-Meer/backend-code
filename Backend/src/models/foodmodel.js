const mongoose = require('mongoose');

const foodscheema = mongoose.Schema({

name:{
  type: String,
  required: true,
},


video: {
  type: String,
  required: true,
},

description: {
  type: String,
},

  foodpartner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:  "foodpartner"
  }
})


const foodmodel = mongoose.model('food', foodscheema)

module.exports =  foodmodel
