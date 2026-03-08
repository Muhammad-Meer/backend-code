const mongosse = require('mongoose')



const connectDB = async () => {

  try {

   await mongosse.connect(process.env.MONGO_URI)

  .then(() => {
    console.log("connectDB")
  })

  } catch (error)  {
    console.log(error+ "connectDB ka eroor ha")
  }

}


module.exports = connectDB