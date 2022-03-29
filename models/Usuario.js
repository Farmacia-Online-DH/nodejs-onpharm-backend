module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('Usuario', {
    usuario_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataType.STRING(100),
    senha: DataType.STRING(20),
    email: DataType.STRING(60),
    telefone: DataType.STRING(15),
    cpf: DataType.STRING(11),
    fk_pagamento_id: DataType.INTEGER
  }, {
    tableName: 'usuarios',
    timestamps: false
  })
  
   Usuario.associate = (modelList) => {
    Usuario.hasMany(modelList.Endereco, {
      foreignKey: 'fk_usuario'
    })
    Usuario.hasMany(modelList.FormaPgto, {
      foreignKey: "fk_pagamento_id"
    })
  } 
 

  return Usuario
}