const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias');

//LISTAR TODOS AS CATEGORIAS
router.get('/', categoriasController.index);

//LISTAR AS CATEGORIAS POR ID
router.get('/buscar/:id', categoriasController.show);

module.exports = router;