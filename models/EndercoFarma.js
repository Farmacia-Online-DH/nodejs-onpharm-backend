const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
    const EnderecoFarma = sequelize.define('EnderecoFarma', {
        enderecofarma_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: DataType.STRING(8),
        logradouro: DataType.STRING(60),
        numero: DataType.STRING(20),/** MYSQL esta com INT NOT NULL*/
        complemento: DataType.STRING(30),
        cidade: DataType.STRING(30),
        estado: DataType.STRING(30),
        fk_farmacia_id: DataType.INTEGER
    }, {
        tableName: 'enderecos_farma',
        timestamps: false
    })

    EnderecoFarma.associate = (modelList) => {
        EnderecoFarma.belongsTo(modelList.Farmacia, {
          foreignKey: 'fk_farmacia_id'
        })
      }
      
    return EnderecoFarma
}