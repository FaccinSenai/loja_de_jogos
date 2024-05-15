const { Router } = require("express");
const router = new Router();
const ProdutosDAO = require('../models/dao/ProdutosDAO');

router.get('/', (req, res) => {
  res.status(200).render("index")
})

router.post('/livros/:id/delete', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoExcluido = ProdutosDAO.deletar(id);
  if (produtoExcluido) {
      res.render('exclusaoConfirmada', { produto: produtoExcluido });
  } else {
      res.status(404).send('Produto não encontrado');
  }
});

// Página de confirmação de exclusão
router.get('/exclusaoConfirmada', (req, res) => {
  res.render('exclusaoConfirmada');
});

// Importa e utiliza as rotas de produtos
const produtosRoutes = require('./produtos');
router.use('/produtos', produtosRoutes);

module.exports = router;
