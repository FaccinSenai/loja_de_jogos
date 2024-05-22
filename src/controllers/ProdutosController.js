const Produto = require("../models/produto");
const ProdutosDAO = require('../models/dao/ProdutosDAO');

class ProdutosController {
  formCreate(req, res) {
    res.status(200).render("produtosCreate");
  }

  create(req, res) {
    let nome = req.body.nome;
    let preco = req.body.preco;
    let promocao = req.body.promocao || false;
    let desconto = req.body.desconto || 0;
    let descricao = req.body.descricao || "Descrição não disponível.";

    let produto = new Produto({ nome, preco, promocao, desconto, descricao });
    produto.calculaPromocao();
    ProdutosDAO.criar(produto);
    res.status(201).redirect("/produtos");
  }

  list(req, res) {
    res.status(200).render("produtosList", {
      produtos: ProdutosDAO.listar(),
      produtosSize: ProdutosDAO.listar().length
    });
  }

  show(req, res) {
    let id = parseInt(req.params.id);
    let produto = ProdutosDAO.buscarPorId(id);
    if (produto) {
      res.render('produtoShow', { produto: produto });
    } else {
      res.status(404).send('Produto não encontrado');
    }
  }

  formEdit(req, res) {
    let id = parseInt(req.params.id);
    let produto = ProdutosDAO.buscarPorId(id);
    if (produto) {
      res.render('produtoEdit', { produto: produto });
    } else {
      res.status(404).send('Produto não encontrado');
    }
  }

  update(req, res) {
    let id = parseInt(req.params.id);
    let produto = ProdutosDAO.buscarPorId(id);
    if (produto) {
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      produto.promocao = req.body.promocao;
      produto.desconto = req.body.desconto;
      produto.descricao = req.body.descricao;
      produto.calculaPromocao();

      ProdutosDAO.atualizar(id, produto);
      res.status(201).redirect("/produtos");
    } else {
      res.status(404).send('Produto não encontrado');
    }
  }

  delete(req, res) {
    let id = parseInt(req.params.id);

    if (ProdutosDAO.exist(id)) {
      ProdutosDAO.deletar(id);
      res.status(201).redirect("/produtos");
    } else {
      res.status(404).send('Produto não encontrado');
    }
  }
}

module.exports = new ProdutosController();
