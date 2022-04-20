module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        produto_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_produto: DataType.STRING(20),
        preco: DataType.DECIMAL(8,2),
        descricao: DataType.STRING(100),
        categoria: DataType.STRING(20),
        quantidade: DataType.INTEGER,
        fabricante: DataType.STRING(20),
        fk_farmacia: DataType.INTEGER
    }, {
        tableName: 'produtos',
        timestamps: false
    })

    Produto.associate = (modelsList) =>{
        Produto.belongsTo(modelsList.Farmacia,{
            foreignKey:'fk_farmacia'
        })
        
      /*   Produto.belongsToMany(modelsList.Pedido,{
			as:'produtos',
			through: 'carrinhos',
			foreignKey: 'fk_produto',
			timestamps:false
		})  */
 
    }

    return Produto
}