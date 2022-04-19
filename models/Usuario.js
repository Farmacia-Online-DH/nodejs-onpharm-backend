module.exports = (sequelize, DataType) => {
	const Usuario = sequelize.define(
		"Usuario",
		{
			usuario_id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nome: DataType.STRING(100),
			senha: DataType.STRING(20),
			email: DataType.STRING(60),
			telefone: DataType.STRING(15),
			cpf: DataType.STRING(11)
		},
		{
			tableName: "usuarios",
			timestamps: false,
		}
	);

	Usuario.associate = (modelsList) => {
		Usuario.hasMany(modelsList.Endereco, {
			foreignKey:'fk_usuario'
		})
		Usuario.hasMany(modelsList.FormaPgto,{
			foreignKey: 'fk_usuario'
		})
		Usuario.hasMany(modelsList.Pedido, {
			foreignKey:'fk_usuario'
		})
		
	}

	return Usuario;
};
