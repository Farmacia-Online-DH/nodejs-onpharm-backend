
module.exports = (sequelize, DataType) => {
    const FormaPgto = sequelize.define('FormaPgto', {
        pagamento_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_cartao: DataType.STRING(16),
        nome_impresso: DataType.STRING(30),
        validade: DataType.STRING(7),
        cvv: DataType.STRING(4), /** ** MYSQL esta com INT NOT NULL*/
        apelido: DataType.STRING(11),
        cpf_titular: DataType.STRING(11)
    }, {
        tableName: 'pagamentos',
        timestamps: false
    })

     FormaPgto.associate = (modelList) => {
        FormaPgto.belongsTo(modelList.Usuario, {
          foreignKey: 'fk_usuario'
        })
      } 
    

    return FormaPgto
}