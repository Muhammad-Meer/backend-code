const mongoose = require('mongoose');

const foodscheema = mongoose.model({
  name:{
    type: String,
    required: true,
  },

  video: {
    type: string,
    required: true,
  },

  description: {
    type: string,
  },

  foodpartner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:  "foodpartner"
  }
})