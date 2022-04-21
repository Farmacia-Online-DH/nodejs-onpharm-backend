const { Produto } = require("../models");

module.exports = (app) => {
	const getProdutos = async (req, res) => {
		try {
			const produtos = await Produto.findAll();
			res.status(200).json(produtos);
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	};

	const postProdutos = async (req, res) => {
		const {
			nome_produto,
			preco,
			descricao,
			categoria,
			estoque,
			fabricante,
			fk_farmacia,
		} = req.body;

		try {
			await Produto.create({
				nome_produto,
				preco,
				descricao,
				categoria,
				estoque,
				fabricante,
				fk_farmacia,
			});
			res.status(201).json("Produto Cadastrado com Sucesso!!!!");
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	};

	const updateProdutos = async (req, res) => {
		const idProdutos = req.params.id;
		const {
			nome_produto,
			preco,
			descricao,
			categoria,
			estoque,
			fabricante,
			fk_farmacia,
		} = req.body;
		try {
			await Produto.update(
				{
					nome_produto,
					preco,
					descricao,
					categoria,
					estoque,
					fabricante,
					fk_farmacia,
				},
				{ where: { produto_id: idProdutos } }
			);
			res.status(200).json("Produto Atualizado com Successo");
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	};

	const deleteProdutos = async (req, res) => {
		const idProdutos = req.params.id;

		try {
			await Produto.destroy({ where: { produto_id: idProdutos } });
			res.status(204).send();
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	};

	return { getProdutos, postProdutos, updateProdutos, deleteProdutos };
};
