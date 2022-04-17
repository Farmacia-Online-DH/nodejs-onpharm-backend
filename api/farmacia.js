const {
    Produto,
    EnderecoFarma,
    Pedido
} = require("../models");



module.exports = (app) => {
    const getFarmacias = async (req, res) => {
        try {
            const farmacias = await farmacias.findAll({
                include: [{
                        model: Produto
                    },
                    {
                        model: EnderecoFarma
                    },
                    {
                        model: Pedido
                    },
                ],
            });
            res.status(200).json(farmacias);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    const postFarmacia = async (req, res) => {
        const {
            razaosocial,
            senha,
            email,
            telefone,
            cnpj
        } = req.body
        try {
            await Farmacia.create({
                razaosocial,
                senha,
                email,
                telefone,
                cnpj
            })
            res.status(201).json('Farmacia Cadastrada Com Sucesso')
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: true,
                ...err
            })
        }
    };

    const updateFarmacia = async (req, res) => {
        const idUser = req.params.id
        const {
            razaosocial,
            senha,
            email,
            telefone,
            cnpj
        } = req.body

        try {
            await Farmacia.update({
                razaosocial,
                senha,
                email,
                telefone,
                cnpj
            }, {
                where: {
                    farmacia_id: idUser
                }
            })
            res.send(200).json('Farmacia Atualizada Com Sucesso')
        } catch (err) {
            res.status(400).json(err);
        }
    }


    const deleteFarmacia = async (req, res) => {
        const idUser = req.params.id

        try {
            await Farmacia.destroy({
                where: {
                    farmacia_id: idUser
                }
            })
            res.status(204).send()
        } catch (err) {
            res.status(400).json(err);
        }

    }

    return {
        getFarmacias,
        postFarmacia,
        updateFarmacia,
        deleteFarmacia
    };
};