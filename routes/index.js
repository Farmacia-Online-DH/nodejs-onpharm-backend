module.exports = (app) => {
  //--------------------Usuarios

  app.get('/usuarios', app.api.usuario.getUsuarios);
  app.post('/usuarios', app.api.usuario.postUsuario);
  app.put('/usuarios/:id', app.api.usuario.updateUsuario);
  app.delete('/usuarios/:id', app.api.usuario.deleteUsuario);

  //--------------------Farmacias (Rafa)

  app.get('/farmacias', app.api.farmacia.getFarmacias);
  app.post('/farmacias', app.api.farmacia.postFarmacia);
  app.put('/farmacias/:id', app.api.farmacia.updateFarmacia);
  app.delete('/farmacias/:id', app.api.farmacia.deleteFarmacia);

  //--------------------Endereços User (Guilherme)

  app.get('/enderecos-user', app.api.enderecoUser.getEnderecosUser);
  app.post('/enderecos-user', app.api.enderecoUser.postEnderecosUser);
  app.put('/enderecos-user/:id', app.api.enderecoUser.updateEnderecosUser);
  app.delete('/enderecos-user/:id', app.api.enderecoUser.deleteEnderecosUser);

  //---------Endereços Farmácias (Rafa)

  app.get('/enderecoFarma', app.api.enderecoFarma.getEnderecoFarmas);
  app.post('/enderecoFarma', app.api.enderecoFarma.postEnderecoFarma);
  app.put('/enderecoFarma/:id', app.api.enderecoFarma.updateEnderecoFarma);
  app.delete('/enderecoFarma/:id', app.api.enderecoFarma.deleteEnderecoFarma);

  //---------FormaPgto - User (Rafa)

  app.get('/formaPgto', app.api.formaPgto.getFormaPgtos);
  app.post('/formaPgto', app.api.formaPgto.postFormaPgto);
  app.put('/formaPgto/:id', app.api.formaPgto.updateFormaPgto);
  app.delete('/formaPgto/:id', app.api.formaPgto.deleteFormaPgto);

  //---------Pedido (Rafa)

  app.get('/pedidos', app.api.pedido.getPedidos);
  app.post('/pedidos', app.api.pedido.postPedido);
  app.put('/pedidos/:id', app.api.pedido.updatePedido);
  app.delete('/pedidos/:id', app.api.pedido.deletePedido);

  //----Produtos (Guilherme)

  app.get('/produtos', app.api.produto.getProdutos);
  app.post('/produtos', app.api.produto.postProdutos);
  app.put('/produtos/:id', app.api.produto.updateProdutos);
  app.delete('/produtos/:id', app.api.produto.deleteProdutos);

  //----Carrinho

  app.get('/carrinhos', app.api.carrinho.getCarrinhos);
  app.post('/carrinhos', app.api.carrinho.postCarrinhos);
  app.put('/carrinhos/:id', app.api.carrinho.putCarrinhos);
  app.delete('/carrinhos/:id', app.api.carrinho.deleteCarrinhos);
};
