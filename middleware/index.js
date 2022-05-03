const jwt = require('jsonwebtoken')

const gateKeeper = (req, res, next) => {
    if(req.headers && req.headers.authorization){
       try{
            jwt.verify(req.headers.authorization, process.env.secret)
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