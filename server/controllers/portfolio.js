const { getAllPortfolio, getByIdPortfolio, getByCategoriaIdPortfolio, getByClienteIdPortfolio, createPortfolio } = require('../services/portfolio')
const { createEnderecoObra } = require('../services/enderecosObras')

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
    },

    add: async (req, res) => {
        const {
            descricao,
            area_terreno,
            area_construida,
            tipologia,
            url_img_1,
            url_img_2,
            url_img_3,
            url_img_4,
            url_img_5,
            id_categoria,
            id_usuario,
            endereco,
            numero,
            bairro,
            cep,
            complemento,
            id_cidade
        } = req.body

        //SEPARANDO DADOS DO ENDEREÇO 
        const dadosEndereco = {
            endereco,
            numero,
            bairro,
            cep,
            complemento,
            fk_cidade: id_cidade
        };

        console.log(dadosEndereco)

        //SALVANDO ENDEREÇO NOVO
        const novoEnderecoObra = await createEnderecoObra(dadosEndereco);
        if (!novoEnderecoObra) {
            res.status(400).send({ message: "Endereço não encontrado!" })
        }
        //SEPARANDO DADOS DO PROJETO 
        const dadosProjeto = {
            descricao,
            area_terreno,
            area_construida,
            tipologia,
            url_img_1,
            url_img_2,
            url_img_3,
            url_img_4,
            url_img_5,
            fk_categoria: id_categoria,
            fk_endereco_obra: novoEnderecoObra.id_endereco_obra,
            fk_usuario: id_usuario
        };

        //SALVANDO PROJETO NOVO
        const novoProjeto = await createPortfolio(dadosProjeto);
        if (!novoProjeto) {
            res.status(400).send({ message: "Projeto não encontrado!" })
        }

        const buscarNovoProjeto = await getByIdPortfolio(novoProjeto.id_projeto)

        res.status(200).json(buscarNovoProjeto)
    }
}

module.exports = controller;