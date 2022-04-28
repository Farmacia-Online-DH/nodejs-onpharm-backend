const jwt = require('jsonwebtoken')
const { secret } = require('../utils')

const gateKeeper = (req, res, next) => {
    if(req.headers && req.headers.authorization){
       try{
            jwt.verify(req.headers.authorization, secret)
            next()
       } 
       catch(err){
           res.status(401).json(err)
       }
    } else{
        res.status(401).json('Usuário não autenticado')
    }

}

module.exports = { gateKeeper }