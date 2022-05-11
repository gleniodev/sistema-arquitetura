const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.js')

//LISTAR TODOS OS PROJETOS
router.get('/', portfolioController.index)

// //LISTAR PROJETOS POR ID
router.get('/buscar/:id', portfolioController.show)

// //LISTAR PROJETOS POR CATEGORIA
router.get('/categoria/:id', portfolioController.categoria)

// //LISTAR PROJETOS POR CLIENTE
router.get('/cliente/:id', portfolioController.cliente)

// //CADASTRAR NOVO PROJETO
router.post('/cadastrar', portfolioController.add)

// //EDITAR PROJETO
router.put('/editar/:id', portfolioController.update)

// //EXCLUIR PROJETO
router.delete('/excluir/:id', portfolioController.delete)

module.exports = router
