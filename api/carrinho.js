const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

module.exports = () => {
	const getCarrinhos = async (req, res) => {
		try {
			const carrinho = await sequelize.query(`
            SELECT nome_produto, preco, quantidade, razaosocial AS farmacia, 
            preco*quantidade as Valor, nome as Cliente
            FROM produtos INNER JOIN carrinhos on fk_produto = produto_id 
            INNER JOIN farmacias on fk_farmacia = farmacia_id 
            INNER JOIN pedidos  on fk_pedido = pedido_id 
            INNER JOIN usuarios on fk_usuario = usuario_id
            `, { type:QueryTypes.SELECT })
             res.status(200).json(carrinho)
		} catch (err) {
			console.log(err);
		}
	};

    return { getCarrinhos }
};
