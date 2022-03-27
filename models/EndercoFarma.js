const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const EnderecoFarma = sequelize.define('EnderecoFarma', {
        enderecofarma_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        logradouro: DataTypes.STRING(60),
        cep: DataTypes.STRING(20),
        complemento: DataTypes.STRING(30),
        numero: DataTypes.STRING(20),
        cidade: DataTypes.STRING(50),
        estado: DataTypes.STRING(50),
        fk_usuario: DataTypes.INTEGER
    }, {
        tableName: 'enderecos_farma',
        timestamps: false
    })

    return EnderecoFarma
}