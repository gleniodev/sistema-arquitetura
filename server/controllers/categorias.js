const { getAllCategorias } = require('../services/categorias')

const controller = {
    index: async (req, res) => {
        const categorias = await getAllCategorias()
        res.status(400).json(categorias)
    }
}

module.exports = controller;