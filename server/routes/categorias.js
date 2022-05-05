const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias');

router.get('/', categoriasController.index);

module.exports = router;