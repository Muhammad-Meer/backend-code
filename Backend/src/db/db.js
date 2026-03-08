const mongosse = require('mongoose')



const connectDB = async () => {

  try {

   await connect(process.env.MONGO_URI)

  .then(() => {
    console.log("connectDB")
  })

  } catch (error)  {
    console.log(error+ "connectDB ka eroor ha")
  }

}


export default connectDB