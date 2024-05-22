class Produto {
  constructor({ id, nome, promocao, preco, desconto, precoPromocao, descricao }) {
    this.id = id;
    this.nome = nome;
    this.promocao = promocao ? promocao : false;
    this.desconto = desconto ? desconto : 0;
    this.preco = preco;
    this.precoPromocao = precoPromocao ? precoPromocao : preco;
    this.descricao = descricao || "Descrição não disponível.";
  }

  calculaPromocao() {
    if (this.promocao && this.desconto > 0) {
      let percetual = ((100 - parseInt(this.desconto)) / 100);
      this.precoPromocao = parseFloat(this.preco * percetual);
    } else {
      this.precoPromocao = this.preco;
    }
  }
}

module.exports = Produto;
