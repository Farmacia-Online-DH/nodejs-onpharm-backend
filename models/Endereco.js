const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
  const Endereco = sequelize.define('Endereco', {
    endereco_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cep: DataType.STRING(8),
    logradouro: DataType.STRING(60),
    numero: DataType.STRING(20), /** MYSQL esta com INT NOT NULL*/
    complemento: DataType.STRING(30),
    cidade: DataType.STRING(30),
    estado: DataType.STRING(30),
    fk_usuario: DataType.INTEGER
  }, {
    tableName: 'enderecos_usuarios',
    timestamps: false
  })
  /** confirmar associate e belongsto */
  /* Endereco.associate = (modelList) => {
    Endereco.belongsTo(modelList.Usuario, {
      foreignKey: 'fk_usuario'
    })
  } */

  return Endereco
}


