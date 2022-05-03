module.exports = (sequelize, DataType) => {
  const Item = sequelize.define('Item', {
    item_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantidade: DataType.INTEGER,
    fk_pedido: DataType.INTEGER,
    fk_produto: DataType.INTEGER,
  }, {
    tableName: 'itens',
    timestamps: false
  })
  
/* 
  Carrinho.associate = (modelsList) =>{
    
    Carrinho.belongsTo(modelsList.Pedido,{
      foreignKey:'fk_pedido'
    })
    
    Carrinho.belongsTo(modelsList.Produto,{
      foreignKey:'fk_produto'
    })

  } */
  
  return Item
  
}

