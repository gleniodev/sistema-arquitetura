const { Categoria } = require('../database/models')

const categoriasService = {}

categoriasService.getAllCategorias = async () => {
    const categorias = await Categoria.findAll()
    return categorias
},
    categoriasService.getByIdCategorias = async id => {
        const categoriasId = await Categoria.findByPk(id)
        return categoriasId
    }

module.exports = categoriasService
