const app = require('./src/app')
const conectDB = require('./src/db/db')

conectDB()


const port = 3200


app.listen(port, () => {
console.log("http://localhost:" + port);})