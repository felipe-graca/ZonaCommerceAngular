export class Carrinho{
  idItem: number;
  idProduto: number;
  quantidadeProduto: number;
  valorProduto: number;

  constructor(
    idItem: number,
    idProduto: number,
    quantidadeProduto: number,
    valorProduto: number,)
  {
    this.idItem = idItem;
    this.idProduto = idProduto;
    this.quantidadeProduto = quantidadeProduto;
    this.valorProduto = valorProduto;
  }
}
