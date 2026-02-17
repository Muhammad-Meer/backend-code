const app = require('./src/app');
const db = require('./src/db');

db()


app.listen(3200, () => {
  console.log("http://localhost:3200")
})