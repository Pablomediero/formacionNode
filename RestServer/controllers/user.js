const { response } = require("express")
const Usuario = require("../models/usuario")


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

    const usuariosPost = async(req, res) => {

        const body = req.body
        const usuario = new Usuario(body)
        await usuario.save()
        res.status(200).json({
            msg: 'Post Api JSONs',
            usuario
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