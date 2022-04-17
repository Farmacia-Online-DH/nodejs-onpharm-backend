const { Usuario, FormaPgto, Endereco, Pedido, Carrinho } = require("../models");


module.exports = (app) => {
	const getUsuarios = async (req, res) => {
		try {
			const usuarios = await Usuario.findAll({
				include: [
					{ model: Endereco },
					{ model: FormaPgto },
                    { model: Pedido },
					{ model: Carrinho }
				],
			});
			res.status(200).json(usuarios);
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const postUsuario = async (req, res) => {
		const { nome, senha, email, telefone, cpf } = req.body
		try{
			await Usuario.create({ nome, senha, email, telefone, cpf })
			res.status(201).json('Usuário Cadastrado Com Sucesso')
		}
		catch(err){
			console.log(err)
            res.status(400).json({error: true, ...err})
		}
	};

	const updateUsuario = async (req, res) => {
		const idUser = req.params.id
		const {nome, senha, email, telefone, cpf} = req.body

		try{
			await Usuario.update(
				{ nome, senha, email, telefone, cpf }, {
					where: { usuario_id:idUser }
				}
			)
			res.send(200).json('Usuário Atualizado Com Sucesso')
		}
		catch(err){
			res.status(400).json(err);
		}
	}
	

	const deleteUsuario = async (req, res) =>{
		const idUser = req.params.id

		try{
			await Usuario.destroy({
				where: {usuario_id:idUser}
			})
			res.status(204).send()
		}
		catch(err){
			res.status(400).json(err);
		}
		
	}

	return { getUsuarios, postUsuario, updateUsuario, deleteUsuario };
};
