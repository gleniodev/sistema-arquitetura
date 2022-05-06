const express = require('express');
const router = express.Router();
const cidadeController = require('../controllers/cidade.js')

//LISTAR TODOS AS CIDADES
router.get('/', cidadeController.index)

//LISTAR CIDADES POR ID
router.get('/buscar/:id', cidadeController.show)

//LISTAR CIDADES POR NOME
router.get('/filtrar', cidadeController.showByName)

module.exports = router;