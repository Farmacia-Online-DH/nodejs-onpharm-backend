const { Usuario, Farmacia } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = (app) => {
	const generateTokenUser = async (req, res) => {
		const { email, senha } = req.body;
		const user = await Usuario.findOne({ where: { email } });
		const comparePassword = bcrypt.compareSync(senha, user.senha);

		if (user && comparePassword) {
			try {
				const userToken = {
					id: user.usuario_id,
					email: user.email,
				};

				const token = jwt.sign({ userToken }, process.env.secret);
				res.status(200).json({ token, id:user.usuario_id, email:user.email });
			} catch (err) {
                console.log(err)
				res.status(400).json(err)
			}
		} else{
            res.status(400).json('Usuário ou Senha incorretos!')
        }
	};

    const generateTokenPharm = async (req, res) => {
        const { email, senha } = req.body;
        const userPharm =  await Farmacia.findOne({ where: { email } });
        const comparePasswordPharm = bcrypt.compareSync(senha, userPharm.senha);

        if(userPharm && comparePasswordPharm) {
            try {
                const userTokenPharm = {
                    id: userPharm.farmacia_id,
                    email: userPharm.email,
                };

                const token = await jwt.sign({ userTokenPharm }, process.env.secret);
                res.status(200).json({ token, id: userPharm.farmacia_id, email: userPharm.email })
            }
            catch(err){
                console.log(err)
                res.status(400).json(err)
            }
        } else {
            res.status(400).json('Farmácia ou Senha incorretos!')
        }


    }
    
	return { generateTokenUser, generateTokenPharm };
};
