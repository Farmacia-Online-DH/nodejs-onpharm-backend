const { Usuario, FormaPgto, Endereco, Pedido } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports = (app) => {
	const getUsuarios = async (req, res) => {
		try {
			const usuarios = await Usuario.findAll({
				include: [
					{ model: Endereco },
					{ model: FormaPgto },
					{ model: Pedido },
				],
			});
			res.status(200).json(usuarios);
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const getUsuariosById = async (req, res) =>{
		const userId = req.params.id
		try {
			const usuarios = await Usuario.findAll({
				where:{ usuario_id:userId },
				include: [
					{ model: Endereco },
					{ model: FormaPgto },
					{ model: Pedido },
				]
			});
			res.status(200).json(usuarios);
		} catch (err) {
			res.status(400).json(err);
		}
	}

	const postUsuario = async (req, res) => {
		const {
			nome,
			senha,
			email,
			telefone,
			cpf,
			cep,
			logradouro,
			numero,
			complemento,
			cidade,
			estado,
		} = req.body;

    console.log(req.body)

		const emailUser = await Usuario.findOne({ where: { email } });

		if (!emailUser) {
			try {
				const responseUser = await Usuario.create({
					nome,
					senha: bcrypt.hashSync(senha, 10),
					email,
					telefone,
					cpf,
				});

				const userId = responseUser.dataValues.usuario_id;

				if (userId) {
					await Endereco.create({
						cep,
						logradouro,
						numero:parseInt(numero),
						complemento,
						cidade,
						estado,
						fk_usuario: userId,
					});
					res.status(201).json("Usuário Cadastrado Com Sucesso");
				}
			} catch (err) {
				console.log(err);
				res.status(400).json({ error: true, ...err });
			}
		} else {
			res.status(400).json("Usuário Já Cadastrado!");
		}
	};

	const updateUsuario = async (req, res) => {
		const userId = req.params.id
		const { nome,
			senha,
			email,
			telefone,
			cpf,
			cep,
			logradouro,
			numero,
			complemento,
			cidade,
			estado} = req.body;

		try {
			await Usuario.update(
				{
					nome,
					senha: bcrypt.hashSync(senha, 10),
					email,
					telefone,
					cpf,
				},

				{
					where: { usuario_id: userId },
				}
			);

			if(userId){
				await Endereco.update(
					{
						cep,
						logradouro,
						numero,
						complemento,
						cidade,
						estado
					},
					{ where: { fk_usuario: userId } }
				);
			}
			res.status(200).json("Usuário Atualizado Com Sucesso");
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const deleteUsuario = async (req, res) => {
		const idUser = req.params.id;

		try {
			await Usuario.destroy({
				where: { usuario_id: idUser },
			});
			res.status(204).send();
		} catch (err) {
			res.status(400).json(err);
		}
	};

	return { getUsuarios, getUsuariosById, postUsuario, updateUsuario, deleteUsuario };
};
