const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/ProdutosController');

// Rota para listar todos os produtos (READ)
router.get('/', produtosController.list);

// Rota para mostrar um produto (READ)
router.get('/:id', produtosController.show);

router.post('/', produtosController.create);

// Rota para excluir um produto (DELETE)
router.put('/:id', produtosController.update);

// Rota para excluir um produto (DELETE)
router.delete('/:id', produtosController.delete);

module.exports = router;
