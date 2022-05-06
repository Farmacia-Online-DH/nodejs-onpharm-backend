module.exports = (app) => {
  
  //--------------------Usuarios

  app.get('/usuarios', app.api.usuario.getUsuarios);
  app.post('/usuarios', app.api.usuario.postUsuario);
  app.put('/usuarios/:id', app.middleware.index.gateKeeper, app.api.usuario.updateUsuario);
  app.delete('/usuarios/:id', app.api.usuario.deleteUsuario);

  //--------------------Farmacias

  app.get('/farmacias', app.api.farmacia.getFarmacias);
  app.post('/farmacias', app.api.farmacia.postFarmacia);
  app.put('/farmacias/:id', app.middleware.index.gateKeeper, app.api.farmacia.updateFarmacia);
  app.delete('/farmacias/:id', app.api.farmacia.deleteFarmacia);

   //------- Login 
  app.post('/login-usuario', app.api.login.generateTokenUser)
  app.post('/login-farmacia', app.api.login.generateTokenPharm)

  //--------------------Endereços User 

  app.get('/enderecos-user', app.api.enderecoUser.getEnderecosUser);
  app.post('/enderecos-user', app.api.enderecoUser.postEnderecosUser);
  app.put('/enderecos-user/:id', app.api.enderecoUser.updateEnderecosUser);
  app.delete('/enderecos-user/:id', app.api.enderecoUser.deleteEnderecosUser);

  //---------Endereços Farmácias 

  app.get('/enderecoFarma', app.api.enderecoFarma.getEnderecoFarmas);
  app.post('/enderecoFarma', app.api.enderecoFarma.postEnderecoFarma);
  app.put('/enderecoFarma/:id', app.api.enderecoFarma.updateEnderecoFarma);
  app.delete('/enderecoFarma/:id', app.api.enderecoFarma.deleteEnderecoFarma);

  //---------FormaPgto 
  app.get('/formaPgto', app.api.formaPgto.getFormaPgtos);
  app.post('/formaPgto', app.api.formaPgto.postFormaPgto);
  app.put('/formaPgto/:id', app.api.formaPgto.updateFormaPgto);
  app.delete('/formaPgto/:id', app.api.formaPgto.deleteFormaPgto);

  //---------Pedido 

  app.get('/pedidos', app.api.pedido.getPedidos);
  app.post('/pedidos', app.middleware.index.gateKeeper, app.api.pedido.postPedido);
  app.put('/pedidos/:id', app.middleware.index.gateKeeper, app.api.pedido.updatePedido);
  app.delete('/pedidos/:id', app.api.pedido.deletePedido);

  //----Produtos

  app.get('/produtos', app.api.produto.getProdutos);
  app.post('/produtos', app.middleware.index.gateKeeper, app.api.produto.postProdutos);
  app.put('/produtos/:id', app.middleware.index.gateKeeper, app.api.produto.updateProdutos);
  app.delete('/produtos/:id', app.api.produto.deleteProdutos);

  //----Carrinho

  app.get('/itens', app.api.item.getItem);
  app.post('/itens', app.api.item.postItem);
  app.put('/itens/:id', app.api.item.updateItens);
  app.delete('/itens/:id', app.api.item.deleteItens); 


};
