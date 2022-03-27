const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const FormaPgto = sequelize.define('FormaPgto', {
        pagamento_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_cartao: DataTypes.STRING(16),
        nome_impresso: DataTypes.STRING(30),
        validade: DataTypes.STRING(7),
        cvv: DataTypes.STRING(4),
        /** coloquei como string pois tive duvida sobre estar INT no diagrama, e coloquei 4 na string pois tem cartos que contem 4 cvv */
        apelido: DataTypes.STRING(11),

    }, {
        tableName: 'formas_pagamento',
        timestamps: false
    })

    return FormaPgto
}