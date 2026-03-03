const mongoose =  require('mongoose')


function conectDb() {
  mongoose.connect('mongodb+srv://muhabbatali:myworldisstart@cluster0.fepov5t.mongodb.net/mern')
  .then(() => {
    console.log("mongo is coneected console")
  })
  .catch((err)=> {
    console.log(err)
  } )  
  
}
module.exports = conectDb