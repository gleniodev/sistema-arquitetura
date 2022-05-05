const express = require('express');
const router = express.Router();
const cidadeController = require('../controllers/cidade.js')

//LISTAR TODOS AS CIDADES
router.get('/', cidadeController.index)

//LISTAR CIDADES POR ID
router.get('/:id', cidadeController.show)

module.exports = router;