const { Categoria } = require('../database/models')

const categoriasService = {}

categoriasService.getAllCategorias = async () => {
    const categorias = await Categoria.findAll()
    return categorias
}

module.exports = categoriasService
