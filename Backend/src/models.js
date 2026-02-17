const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  image: String,
  caption: String,
})


const model = mongoose.model('deta', schema)

module.exports = model
