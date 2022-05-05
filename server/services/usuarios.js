const { Usuario } = require('../database/models')

const usuariosService = {}

usuariosService.getAllUsuarios = async () => {
    const usuarios = await Usuario.findAll().catch(console.trace)
    return usuarios
}

module.exports = usuariosService
