const { getAllPortfolio, getByIdPortfolio, getByCategoriaIdPortfolio, getByClienteIdPortfolio } = require('../services/portfolio')

const controller = {
    index: async (req, res) => {
        const portfolio = await getAllPortfolio()
        if (!portfolio) {
            res.status(400).send({ message: "Não existe nenhum projeto cadastrado!" })
        }
        res.status(200).json(portfolio)
    },

    show: async (req, res) => {
        const { id } = req.params
        if (!id) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        const portfolioId = await getByIdPortfolio(id)
        if (!portfolioId) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        res.json(portfolioId)
    },

    categoria: async (req, res) => {
        const { id } = req.params
        if (!id) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        const portfolioCategoria = await getByCategoriaIdPortfolio(id)
        if (!portfolioCategoria) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        res.json(portfolioCategoria)
    },

    cliente: async (req, res) => {
        const { id } = req.params
        if (!id) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        const portfolioCliente = await getByClienteIdPortfolio(id)
        if (!portfolioCliente) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }
        res.json(portfolioCliente)
    }
}

module.exports = controller;