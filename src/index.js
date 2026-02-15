const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ storage: multer.memoryStorage()});


app.post('/posts', upload.single('image'), async (req, res) => {
  const data = req.body;
  console.log(data);
  console.log(req.file);
  res.send('ok')
})


module.exports = app;

