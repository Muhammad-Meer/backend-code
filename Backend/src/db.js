const mongoose = require("mongoose");

async function connectDb() {
  await mongoose
    .connect("mongodb+srv://muhabbatali:myworldisstart@cluster0.fepov5t.mongodb.net/project0-1")
    .then(() => {
      console.log("db connected________");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDb;
