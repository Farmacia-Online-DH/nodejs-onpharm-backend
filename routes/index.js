module.exports = (app) => {

//--------------------Usuarios

    app.get('/usuarios', app.api.usuario.getUsuarios)
    app.post('/usuarios', app.api.usuario.postUsuario)
    app.put('/usuarios/:id', app.api.usuario.updateUsuario)
    app.delete('/usuarios/:id', app.api.usuario.deleteUsuario)

//--------------------Farmacias





}