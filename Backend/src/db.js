const mongoose = require("mongoose");

async function connectDb() {
  await mongoose
    .connect("mongodb+srv://muhabbatali:zVqoJkgRl0U2kE9V@cluster0.fepov5t.mongodb.net/new")
    .then(() => {
      console.log("db connected________");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDb;
