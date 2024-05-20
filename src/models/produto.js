class Produto {
  constructor({ id, nome, promocao, desconto, preco, precoDesconto }) {
    this.id = id;
    this.nome = nome;
    this.promocao = promocao;
    this.desconto = desconto;
    this.preco = preco;
    this.precoDesconto = precoDesconto;
  }

  calculaPromocao() {
    if (this.promocao && this.desconto > 0) {
      this.precoDesconto = this.preco - (this.preco * (this.desconto / 100));
    } else {
      this.precoDesconto = this.preco;
    }
  }
}

module.exports = Produto;
