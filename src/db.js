const mongosse = require('mongoose')

async function conectDB() {
   await mongosse.connect('mongodb+srv://muhabbatali:zVqoJkgRl0U2kE9V@cluster0.fepov5t.mongodb.net/test')
  console.log('db connected')
}

module.exports = conectDB