const mongoose = require('mongoose')

const scheema = new mongoose.scheema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
  
})


const model = mongoose.model('details', scheema)


module.exports = model



