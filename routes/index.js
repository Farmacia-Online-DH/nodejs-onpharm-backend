module.exports = (app) => {

    app.get('/usuarios', app.api.usuario.getUsers)

}