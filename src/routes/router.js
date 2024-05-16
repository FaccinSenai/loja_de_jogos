const { Router } = require("express");
const router = new Router();
const Produto = require("../models/produto")
const ProdutosDAO = require('../models/dao/ProdutosDAO');

router.get('/', (req, res) => {
  res.status(200).render("index")
})

router.post('/produtos/:id/delete', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoExcluido = ProdutosDAO.deletar(id);
  if (produtoExcluido) {
    res.redirect('/exclusaoConfirmada');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

router.get('/exclusaoConfirmada', (req, res) => {
  res.render('exclusaoConfirmada');
});

// Exibir formulário de edição
router.get('/produtos/:id/edit', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = ProdutosDAO.buscarPorId(id);
  if (produto) {
    res.render('produtosEdit', { produto: produto });
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Lidar com a submissão do formulário de edição
router.post('/produtos/:id/edit', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, preco } = req.body;
  const produtoAtualizado = new Produto({ id, nome, preco });
  ProdutosDAO.atualizar(id, produtoAtualizado);
  res.redirect('/produtos');
});

router.get('/produtos/create', (req, res) => {
  res.render('produtosCreate');
});

// Lidar com a submissão do formulário de criação
router.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;
  const novoProduto = { nome, preco };
  ProdutosDAO.criar(novoProduto);
  res.redirect('/produtos');
});

// Importa e utiliza as rotas de produtos
const produtosRoutes = require('./produtos');
router.use('/produtos', produtosRoutes);

module.exports = router;
