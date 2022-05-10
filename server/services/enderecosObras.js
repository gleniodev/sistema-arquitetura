const { EnderecoObra } = require('../database/models')

const enderecoObraService = {}

enderecoObraService.createEnderecoObra = async novoEndereco => {
    const enderecoObra = await EnderecoObra.create({ ...novoEndereco })
    return enderecoObra
}

module.exports = enderecoObraService
