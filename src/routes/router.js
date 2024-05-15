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
    res.redirect('/exclusaoConfirmada');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

router.get('/exclusaoConfirmada', (req, res) => {
  res.render('exclusaoConfirmada');
});

module.exports = router;

// Importa e utiliza as rotas de produtos
const produtosRoutes = require('./produtos');
router.use('/produtos', produtosRoutes);

module.exports = router;
