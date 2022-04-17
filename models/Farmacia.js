const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
    const Farmacia = sequelize.define('Farmacia', {
        farmacia_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        razaosocial: DataType.STRING(60),
        senha: DataType.STRING(20),
        email: DataType.STRING(60),
        telefone: DataType.STRING(15),
        cnpj: DataType.STRING(14),
        fk_produto: DataType.INTEGER
    }, {
        tableName: 'farmacias',
        timestamps: false
    })

    Farmacia.associate = (modelList) => {
        Farmacia.hasMany(modelList.Produto, {
          foreignKey: "fk_produto"
        })
        Farmacia.hasMany(modelList.EnderecoFarma,{
            foreignKey: 'fk_farmacia'
        })
        Farmacia.hasMany(modelList.Pedido, {
            foreignKey: 'fk_farmacia'
        })
      }  

    return Farmacia
}