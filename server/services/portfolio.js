const { Portfolio } = require('../database/models')

const portfolioService = {}

portfolioService.getAllPortfolio = async () => {
    const portfolio = await Portfolio.findAll({
        include: ["usuario", "categoria", "enderecoObra"],
    })//.catch(console.trace) - usar para apontar os erros
    return portfolio
}

portfolioService.getByIdPortfolio = async id => {
    const portfolio = await Portfolio.findByPk(id, {
        include: ["usuario", "categoria", "enderecoObra"]
    })
    return portfolio
}

portfolioService.getByCategoriaIdPortfolio = async id => {
    const portfolio = await Portfolio.findAll({
        where: { fk_categoria: id },
        include: ["usuario", "categoria", "enderecoObra"]
    })
    return portfolio
}

portfolioService.getByClienteIdPortfolio = async id => {
    const portfolio = await Portfolio.findAll({
        where: { fk_usuario: id },
        include: ["usuario", "categoria", "enderecoObra"]
    })
    return portfolio
}

module.exports = portfolioService


//INCLUIR APENAS O NOME COMPLETO DO USUARIO NO OBJETO
// include: [{
//     attributes: ["nome_completo"],
//     model: Usuario,
//     as: "usuario"
// }
// ]

//ICLUI TODOS OS DADOS DO RELACIONAMENTO
// include: ["usuario"] -> alias informado no relacionamento
// }
// ]
