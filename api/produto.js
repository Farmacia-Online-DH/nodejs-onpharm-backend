const { Produto } = require("../models")

module.exports = (app) => {
    const getProdutos = async (req, res) => {
        try{
            const produtos = await Produto.findAll()
            console.log("Qualquer coisa", produtos)
            res.status(200).json(produtos)
        }
        catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    }
 
    return { getProdutos }
}