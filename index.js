const express = require('express')
const app = express()
const consign = require('consign')
app.use(express.json())

// ***

app.listen(3000, () => {
  console.log('App rodando na porta 3000')
})