const app = require('./src/index'); 
const conectDB = require('./src/db');


conectDB()

const PORT = 3200;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
