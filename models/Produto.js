const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        produto_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_produto: DataType.STRING(20),
        preco: DataType.DOUBLE(7, 2),
        descricao: DataType.STRING(100),
        categoria: DataType.STRING(20),
        quantidade: DataType.INTEGER,
        fabricante: DataType.STRING(20)
    }, {
        tableName: 'produtos',
        timestamps: false
    })

    

    return Produto
}