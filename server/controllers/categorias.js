const { getAllCategorias, getByIdCategorias } = require('../services/categorias')

const controller = {
    index: async (req, res) => {
        const categorias = await getAllCategorias()
        res.status(400).json(categorias)
    },
    show: async (req, res) => {
        const { id } = req.params
        if (!id) {
            res.status(400).send({ message: "Categoria não encontrada!" })
        }
        const categoriasId = await getByIdCategorias(id)
        if (!categoriasId) {
            res.status(400).send({ message: "Categoria não encontrada!" })
        }
        res.json(categoriasId)
    },
}

module.exports = controller;