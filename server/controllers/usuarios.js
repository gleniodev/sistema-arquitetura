const { getAllUsuarios } = require('../services/usuarios')

const controller = {
    index: async (req, res) => {
        const usuarios = await getAllUsuarios()
        res.status(400).json(usuarios)
    }
}

module.exports = controller;