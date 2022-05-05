const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.js')

//LISTAR TODOS OS PROJETOS
router.get('/', usuariosController.index)

module.exports = router;