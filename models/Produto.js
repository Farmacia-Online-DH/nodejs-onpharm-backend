const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        produto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_produto: DataTypes.STRING(60),
        preco: DataTypes.INTEGER(7, 2),
        /** o diagrama estava com o valor decimal, mas tive duvida e nao achei e coloquei desta forma */
        descricao: DataTypes.STRING(100),
        categoria: DataTypes.STRING(20),
        quantidade: DataTypes.INTEGER(100),
        /** coloquei integer aqui tambem */
        fabricante: DataTypes.STRING(60)
    }, {
        tableName: 'produtos',
        timestamps: false
    })



    return Produto
}