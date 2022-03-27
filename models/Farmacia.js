const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Farmacia = sequelize.define('Farmacia', {
        farmacia_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        razaosocial: DataTypes.STRING(60),
        senha: DataTypes.STRING(20),
        email: DataTypes.STRING(60),
        telefone: DataTypes.STRING(15),
        cnpj: DataTypes.STRING(14),
        fk_enderecofarma_id: DataTypes.INTEGER,
        fk_produto_id: DataTypes.INTEGER
    }, {
        tableName: 'farmacias',
        timestamps: false
    })



    return Farmacia
}