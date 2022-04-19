module.exports = (sequelize, DataType) => {
	const Pedido = sequelize.define("Pedido", {
		pedido_id: {
			type: DataType.INTEGER,
			primaryKey: DataType.INTEGER,
			autoIncrement: true,
		},
		status_compra: DataType.STRING,
		valor_final: DataType.DECIMAL(8, 2),
		fk_usuario: DataType.INTEGER,
		fk_farmacia: DataType.INTEGER,
		fk_pagamento:DataType.INTEGER
	},{
		tableName: 'pedidos',
		timestamps: false
	  });

	Pedido.associate = (modelsList) => {
		Pedido.belongsTo(modelsList.Usuario,{
			foreignKey:'fk_usuario'
		})
		Pedido.belongsTo(modelsList.FormaPgto,{
			foreignKey:'fk_pagamento'
		})
		Pedido.belongsTo(modelsList.Farmacia,{
			foreignKey:'fk_farmacia'
		})

	   Pedido.belongsTo(modelsList.Carrinho, {
			foreignKey:'fk_pedido'
		}) 

 

	};
	return Pedido;
};
