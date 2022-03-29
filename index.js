const express = require('express')
const app = express()
const consign = require('consign')

const { Usuario, FormaPgto } = require('./models')

app.use(express.json())

app.get('/usuarios',  async (req,res)=>{
  try{
    const usuarios = await Usuario.findAll({
      model: FormaPgto
    })
    res.status(200).json(usuarios)

  }
  catch(err){
      res.status(400).json(err)
  }

})




app.listen(3000, () => {
  console.log('App rodando na porta 3000')
})