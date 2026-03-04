const mongosse = require('mongoose')



const conectDB = () => {
  mongosse.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("successfully connect")
  })

  .catch((error) => {
    console.log(error)
  })
}


module.exports = conectDB