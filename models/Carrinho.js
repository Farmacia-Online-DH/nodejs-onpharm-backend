const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
  const Carrinho = sequelize.define('Carrinho', {
    carrinho_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantidade: DataType.INTEGER,
    fk_pedido: DataType.INTEGER,
    fk_produto: DataType.INTEGER,
  }, {
    tableName: 'carrinhos',
    timestamps: false
  })

  Carrinho.associate = (modelsList) =>{
    Carrinho.belongsTo(modelsList.Usuario,{
      foreignKey: 'fk_usuario'
    })
  }
  
  

  return Carrinho
  
}

