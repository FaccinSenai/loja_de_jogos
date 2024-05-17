const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/ProdutosController');

// Rota para listar todos os produtos (READ)
router.get('/', produtosController.list);

// Rota para mostrar um produto (READ)
router.get('/:id', produtosController.show);

// Rota para exibir o formulário de criação de um novo produto
router.get('/create', produtosController.formCreate);

// Rota para criar um novo produto (CREATE)
router.post('/create', produtosController.create);

// Rota para exibir o formulário de edição de um produto (READ)
router.get('/:id/edit', produtosController.formEdit);

// Rota para excluir um produto (DELETE)
router.put('/:id', produtosController.update);

// Rota para excluir um produto (DELETE)
router.delete('/:id', produtosController.delete);

module.exports = router;
