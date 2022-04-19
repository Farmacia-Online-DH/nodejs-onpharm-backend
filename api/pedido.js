const { Pedido, Usuario, FormaPgto, Farmacia  } = require("../models");


module.exports = (app) => {
  const getPedidos = async (req, res) => {
    try {
      const pedidos = await Pedido.findAll({
        include: [
          { model: Usuario },
          { model: FormaPgto },
          { model: Farmacia },
        ],
      });
      res.status(200).json(pedidos);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const postPedido = async (req, res) => {
    const { staus_compra, valor_final } = req.body;
    try {
      await Pedido.create({
        staus_compra,
        valor_final
      });
      res.status(201).json("Pedido Cadastrado Com Sucesso");
    } catch (err) {
      console.log(err);
      res.status(400).json({
        error: true,
        ...err,
      });
    }
  };

  const updatePedido = async (req, res) => {
    const idPedido = req.params.id;
    const { staus_compra, valor_final } = req.body;

    try {
      await Pedido.update(
        {
         staus_compra,
         valor_final
        },
        {
          where: {
            pedido_id: idPedido,
          },
        }
      );
      res.send(200).json("Pedido Atualizado Com Sucesso");
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const deletePedido = async (req, res) => {
    const idPedido = req.params.id;

    try {
      await Pedido.destroy({
        where: {
          pedido_id: idPedido,
        },
      });
      res.status(204).send();
    } catch (err) {
      res.status(400).json(err);
    }
  };

  return {
    getPedidos,
    postPedido,
    updatePedido,
    deletePedido,
  };
};
