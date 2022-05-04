const { response } = require("express")

    const usuariosGet = (req, res = response) => {
        res.status(200).json({
            ok: true,
            msg: 'Get Api JSON - Controlador'
        });
    }

    const usuariosPut = (req, res) => {
        const id = req.params.id
        res.status(200).json({
            ok: true,
            msg: 'Put Api JSON',
            id
        });
    }

    const usuariosPost = (req, res) => {

        const {nombre, apellidos} = req.body

        res.status(200).json({
            ok: true,
            msg: 'Post Api JSON',
            nombre,
            apellidos
        });
    }

    const usuariosDelete = (req, res) => {
        res.status(200).json({
            ok: true,
            msg: 'Delete Api JSON'
        });
    }

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}