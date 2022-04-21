const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

module.exports = () => {
	const getCarrinhos = async (req, res) => {
		try {
			const carrinho = await sequelize.query(
				`
            SELECT nome_produto, preco, quantidade, razaosocial AS farmacia, 
            preco*quantidade as Valor, nome as Cliente
            FROM produtos INNER JOIN carrinhos on fk_produto = produto_id 
            INNER JOIN farmacias on fk_farmacia = farmacia_id 
            INNER JOIN pedidos  on fk_pedido = pedido_id 
            INNER JOIN usuarios on fk_usuario = usuario_id
            `,
				{ type: QueryTypes.SELECT }
			);
			res.status(200).json(carrinho);
		} catch (err) {
			console.log(err);
		}
	};

	const postCarrinhos = async (req, res) => {
		const { fk_pedido, fk_produto, quantidade } = req.body;
		try {
			await sequelize.query(
				`INSERT INTO carrinhos (fk_pedido, fk_produto, quantidade)
            VALUES (:pedido, :produto, :quantidade)`,
				{
					replacements: {
						pedido: fk_pedido,
						produto: fk_produto,
						quantidade,
					},
					type: QueryTypes.INSERT,
				}
			);
			res.status(201).json("Carrinho cadastrado com sucesso");
		} catch (err) {
			console.log(err);
			res.status(400).json({ error: true, ...err });
		}
	};

	const updateCarrinhos = async (req, res) => {
		const idCarrinhos = req.params.id;
		const { fk_pedido, fk_produto, quantidade } = req.body;

		try {
			await sequelize.query(
				`UPDATE carrinhos
            SET fk_pedido = :pedido, fk_produto = :produto, quantidade = :quantidade 
            WHERE carrinho_id = :id`,
				{
					replacements: {
						pedido: fk_pedido,
						produto: fk_produto,
						quantidade: quantidade,
						id: idCarrinhos,
					},
					type: QueryTypes.UPDATE,
				}
			);

			res.status(200).json("Carrinho Atualizado Com Sucesso");
		} catch (err) {
			res.status(400).json(err);
		}
	};

	const deleteCarrinhos = async (req, res) => {
		const idCarrinhos = req.params.id;
		try {
			await sequelize.query(
				`
            DELETE FROM
            carrinhos
            WHERE
            carrinho_id = :id`,
				{ replacements: { id: idCarrinhos }, type: QueryTypes.DELETE }
			);

			res.status(204).send();
		} catch (err) {
			res.status(400).json(err);
		}
	};

	return { getCarrinhos, postCarrinhos, updateCarrinhos, deleteCarrinhos };
};
