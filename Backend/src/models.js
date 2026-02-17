const mongosse = require('mongoose')

const scheema = new mongosse.Schema({
  image: String,
  caption: String,
})

const post = mongosse.model('post', scheema)

module.exports = post