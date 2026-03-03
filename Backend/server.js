const app = require("./src/app");
const conectDb = require("./src/db/db");








conectDb()


const port = 3200;
app.listen(port, () => {
  console.log("http://localhost" + port);
});
