const { Farmacia, Produto, EnderecoFarma, Pedido } = require("../models");
const bcrypt = require("bcrypt");

module.exports = (app) => {
	const getFarmacias = async (req, res) => {
		try {
			const farmacias = await Farmacia.findAll({
				include: [
					{ model: EnderecoFarma },
					{ model: Produto },
					{ model: Pedido },
				],
			});
			res.status(200).json(farmacias);
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const getFarmaciasById = async (req, res) =>{
		const pharmId = req.params.id
		try {
			const farmacia = await Farmacia.findAll({
				where:{ farmacia_id:pharmId },
				include: [
					{ model: EnderecoFarma },
					{ model: Produto },
					{ model: Pedido },
				]
			});
			res.status(200).json(farmacia);
		} catch (err) {
			res.status(400).json(err);
		}
	}


	const postFarmacia = async (req, res) => {
		const {
			razaosocial,
			senha,
			email,
			telefone,
			cnpj,
			cep,
			logradouro,
			numero,
			complemento,
			cidade,
			estado,
		} = req.body;

		console.log(req.body);

		const emailFarmacia = await Farmacia.findOne({ where: { email } });

		if (!emailFarmacia) {
			try {
				const responseEstab = await Farmacia.create({
					razaosocial,
					senha: bcrypt.hashSync(senha, 10),
					email,
					telefone,
					cnpj,
				});
				const estabelecimentoId = responseEstab.dataValues.farmacia_id;

				if (estabelecimentoId) {
					await EnderecoFarma.create({
						cep,
						logradouro,
						numero: parseInt(numero),
						complemento,
						cidade,
						estado,
						fk_farmacia: estabelecimentoId,
					});
				}
				res.status(201).json("Farmacia Cadastrada Com Sucesso");
			} catch (err) {
				console.log(err);
				res.status(400).json({ error: true, ...err });
			}
		} else {
			res.status(400).json("Farmacia Já Cadastrada");
		}
	};

	const updateFarmacia = async (req, res) => {
		const idFarmacia = req.params.id;
		const {
			email,
			senha,
			telefone,
			cep,
			logradouro,
			numero,
			complemento,
			cidade,
			estado,
			cnpj,
			razaosocial,
		} = req.body;

		try {
			console.log(req.body);
			await Farmacia.update(
				{
					razaosocial,
					senha: bcrypt.hashSync(senha, 10),
					email,
					telefone,
					cnpj,
				},
				{
					where: {
						farmacia_id: idFarmacia,
					},
				}
			);

			if (idFarmacia) {
				await EnderecoFarma.update(
					{
						cep,
						logradouro,
						numero,
						complemento,
						cidade,
						estado,
					},
					{
						where: {
							fk_farmacia: idFarmacia,
						},
					}
				);
			}
			res.status(200).json("Farmacia Atualizada Com Sucesso");
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const deleteFarmacia = async (req, res) => {
		const idFarmacia = req.params.id;

		try {
			await Farmacia.destroy({
				where: {
					farmacia_id: idFarmacia,
				},
			});
			res.status(204).send();
		} catch (err) {
			res.status(400).json(err);
		}
	};

	return {
		getFarmacias,
		getFarmaciasById,
		postFarmacia,
		updateFarmacia,
		deleteFarmacia,
	};
};
