const mongoose = require('mongoose')


const foodscheema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  
  video: {
    type: String,
    required: true

  },


  description: {
    type: String,
  },


  foodpartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "food-partner"
  }

})

const foodmodel = mongoose.model("food", foodscheema)