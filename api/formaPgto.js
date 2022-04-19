const { FormaPgto, Usuario, Pedido } = require("../models");


module.exports = (app) => {
  const getFormaPgtos = async (req, res) => {
    try {
      const formaPgto = await FormaPgto.findAll({
        include: [
          { model: Usuario },
          { model: Pedido }
        ],
      });
      res.status(200).json(formaPgto);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const postFormaPgto = async (req, res) => {
    const { numero_cartao, nome_impresso, validade, cvv, apelido, cpf_titular } = req.body;
    try {
      await FormaPgto.create({
        numero_cartao,
        nome_impresso,
        validade,
        cvv,
        apelido,
        cpf_titular
      });
      res.status(201).json("Forma de pagamento Cadastrado Com Sucesso");
    } catch (err) {
      console.log(err);
      res.status(400).json({
        error: true,
        ...err,
      });
    }
  };

  const updateFormaPgto = async (req, res) => {
    const idFormaPgto = req.params.id;
    const { numero_cartao, nome_impresso, validade, cvv, apelido, cpf_titular } = req.body;

    try {
      await FormaPgto.update(
        {
         numero_cartao,
         nome_impresso,
         validade,
         cvv,
         apelido,
         cpf_titular
        },
        {
          where: {
            pagamento_id: idFormaPgto,
          },
        }
      );
      res.send(200).json("Forma de pagamento Atualizado Com Sucesso");
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const deleteFormaPgto = async (req, res) => {
    const idFormaPgto = req.params.id;

    try {
      await Farmacia.destroy({
        where: {
            pagamento_id: idFormaPgto,
        },
      });
      res.status(204).send();
    } catch (err) {
      res.status(400).json(err);
    }
  };

  return {
    getFormaPgtos,
    postFormaPgto,
    updateFormaPgto,
    deleteFormaPgto,
  };
};
