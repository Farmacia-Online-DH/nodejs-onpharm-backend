module.exports = () =>{
    const login = async (req, res) => {
        const user = await Usuario.findOne({ where: { email: req.body.email } })
  
        if (user && bcrypt.compareSync(req.body.senha, user.senha)) {
            const token = jwt.sign({ id: user.id_usuario, email: user.email }, secret)
            res.status(200).json({ token })
        } else res.status(400).json('Usuário ou Senha incorretos!')
      }
     


    return login
}