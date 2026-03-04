const mongosse = require('mongoose')



const conectDB = () => {
  mongosse.connect(process.env.MONGO_URI)
  .then(console.log("conected"))
  .catch(console.log("some eroor"))
}


module.exports = conectDB