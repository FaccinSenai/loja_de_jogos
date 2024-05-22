const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/ProdutosController');

// Rota para listar todos os produtos (READ)
router.get('/', produtosController.list);

// Rota para mostrar o formulário de criação de produto (CREATE)
router.get('/create', produtosController.formCreate);

// Rota para criar um novo produto (CREATE)
router.post('/create', produtosController.create);

// Rota para mostrar um produto (READ)
router.get('/:id', produtosController.show);

// Rota para mostrar o formulário de edição de produto (UPDATE)
router.get('/:id/edit', produtosController.formEdit);

// Rota para atualizar um produto (UPDATE)
router.post('/:id/edit', produtosController.update);

// Rota para excluir um produto (DELETE)
router.post('/:id/delete', produtosController.delete);

module.exports = router;
