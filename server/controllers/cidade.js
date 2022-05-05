const { getAllCidades, getByIdCidades } = require('../services/cidades')

const controller = {
    index: async (req, res) => {
        const cidades = await getAllCidades()
        res.status(200).json(cidades)
    },
    show: async (req, res) => {
        const { id } = req.params
        const cidades = await getByIdCidades(id)
        if (!cidades) {
            res.status(400).send({ message: "Cidade não encontrada!" })
        }
        res.status(200).json(cidades)
    }
}

module.exports = controller;