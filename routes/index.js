module.exports = (app) => {

    //--------------------Usuarios

    app.get('/usuarios', app.api.usuario.getUsuarios)
    app.post('/usuarios', app.api.usuario.postUsuario)
    app.put('/usuarios/:id', app.api.usuario.updateUsuario)
    app.delete('/usuarios/:id', app.api.usuario.deleteUsuario)

    //--------------------Farmacias

    app.get('/farmacias', app.api.farmacias.getFarmacias)
    app.post('/farmacias', app.api.farmacias.postFarmacia)
    app.put('/farmacias/:id', app.api.farmacias.updateFarmacia)
    app.delete('/farmacias/:id', app.api.farmacias.deleteFarmacia)



}