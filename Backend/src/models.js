const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  email: String,
})


const model = mongoose.model('deta', schema)

module.exports = model
