const express = require('express');

const app = express();
app.use(express.json());


app.post('/posts', async (req, res) => {
  const data = req.body;
  console.log(data);
})


module.exports = app;

