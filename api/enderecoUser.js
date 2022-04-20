const { Endereco } = require("../models");

module.exports =() =>{
    const getEnderecosUser = async (req,res) =>{
        try{
            const enderecosUser = await Endereco.findAll()
            res.status(200).json(enderecosUser);
        } 
        catch(err){
            res.status(400).json(err)
        }
    }

    const postEnderecosUser = async (req, res) =>{
        const { cep, logradouro, numero, complemento, cidade, estado, fk_usuario } = req.body
        try{
            await Endereco.create({ cep, logradouro, numero, complemento, cidade, estado, fk_usuario })
            res.status(201).json("Endereço Cadastrado Com Sucesso");
        }
        catch(err){
            res.status(400).json({ error: true, ...err });
        }    
    }
    
    const updateEnderecosUser = async (req, res) => {
        const idEndereco = req.params.idEndereco
        const { cep, logradouro, numero, complemento, cidade, estado, fk_usuario } = req.body
        try{
            await Endereco.update({ cep, logradouro, numero, complemento, cidade, estado, fk_usuario },
                {where:{id:idEndereco}})
        }
        catch(err){
            res.status(400).json({ error: true, ...err });
        }

    const deleteEnderecosUser = async (req, res) =>{
        const idEndereco = req.params.idEndereco
        try{
            await Endereco.destroy({where:{id:idEndereco}})
            res.status(204).send();
        }
        catch(err){
            res.status(400).json(err);
        }
    }

    }

    return { getEnderecosUser, postEnderecosUser, updateEnderecosUser, deleteEnderecosUser }
}