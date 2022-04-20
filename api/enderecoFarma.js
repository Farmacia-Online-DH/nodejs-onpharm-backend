const { EnderecoFarma, Farmacia  } = require("../models");


module.exports = (app) => {
  const getEnderecoFarmas = async (req, res) => {
    try {
      const enderecoFarma = await EnderecoFarma.findAll({
        include: [
          { model: Farmacia },
        ],
      });
      res.status(200).json(enderecoFarma);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const postEnderecoFarma = async (req, res) => {
    const { cep, logradouro, numero, complemento, cidade, estado } = req.body;
    try {
      await EnderecoFarma.create({
        cep,
        logradouro,
        numero,
        complemento,
        cidade,
        estado
      });
      res.status(201).json("Endereço farmacia Cadastrada Com Sucesso");
    } catch (err) {
      console.log(err);
      res.status(400).json({
        error: true,
        ...err,
      });
    }
  };

  const updateEnderecoFarma = async (req, res) => {
    const idEnderecoFarma = req.params.id;
    const {  cep, logradouro, numero, complemento, cidade, estado } = req.body;

    try {
      await EnderecoFarma.update(
        {
            cep,
            logradouro,
            numero,
            complemento,
            cidade,
            estado
        },
        {
          where: {
            enderecofarma_id: idEnderecoFarma,
          },
        }
      );
      res.send(200).json("Endereço farmacia Atualizada Com Sucesso");
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const deleteEnderecoFarma = async (req, res) => {
    const idEnderecoFarma = req.params.id;

    try {
      await EnderecoFarma.destroy({
        where: {
            enderecofarma_id: idEnderecoFarma,
        },
      });
      res.status(204).send();
    } catch (err) {
      res.status(400).json(err);
    }
  };

  return {
    getEnderecoFarmas,
    postEnderecoFarma,
    updateEnderecoFarma,
    deleteEnderecoFarma,
  };
};
