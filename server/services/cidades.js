const { Cidade } = require('../database/models')

const cidadesService = {}

cidadesService.getAllCidades = async () => {
    const cidades = await Cidade.findAll({
        include: "estado",
    })
    return cidades
},

    cidadesService.getByIdCidades = async id => {
        const cidades = await Cidade.findByPk(id, {
            include: "estado"
        })
        return cidades
    }

module.exports = cidadesService
