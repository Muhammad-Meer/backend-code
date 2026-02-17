const express = require('express')
const app = express()

app.use(express.json());

app.post('/create', async (req, res) => {
  console.log(req.body)
  res.status(200).json({
    message: 'ok'
  })
  res.status(400).json({
    message: 'error'
  })
})

module.exports = app
