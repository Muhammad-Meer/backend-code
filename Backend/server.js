const app = require('./src/app')
const connectDB = require('./src/db/db')




connectDB()

const port = 3200
app.listen(port , () => {
 console.log("http://localhost:" + port)
})