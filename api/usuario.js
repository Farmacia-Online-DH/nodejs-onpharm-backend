const { Usuario } = require ('../models')

module.exports = (app) =>{

    const getUsuarios = async (req,res)=>{
        try{
          const usuarios = await Usuario.findAll()
          res.status(200).json(usuarios)
    
        }
        catch(err){
            res.status(400).json(err)
        }

    }

    return { getUsuarios }

}