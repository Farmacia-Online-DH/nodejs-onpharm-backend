const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(60),
    senha: DataTypes.STRING(20),
    email: DataTypes.STRING(60),
    telefone: DataTypes.STRING(20),
    cpf: DataTypes.STRING(20)
  }, {
    tableName: 'usuarios',
    timestamps: false
  })

  Usuario.associate = (modelList) => {
    Usuario.hasMany(modelList.Endereco, {
      foreignKey: 'fk_usuario'
    })
  }

  return Usuario
}