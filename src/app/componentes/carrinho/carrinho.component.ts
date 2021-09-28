import { Produtos } from 'src/app/https/models/produtos';
import { CarrinhoService } from './../../https/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/https/models/carrinho';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  carrinho: Carrinho[];
  products:any = [];
  productsAmount:any = [];
  data:any = [];

  valorTotal = 0;



  ngOnInit() {
    this.carrinhoService.getProductsInCart().subscribe((result) => {
      this.carrinho = result;
    });
    timer(100).subscribe(result => {
      for(var i = 0; i < this.carrinho.length; i++){
        this.data.push(
          {'id': this.carrinho[i]["idItem"], 'idProduto': this.carrinho[i]["idProduto"]}
        )
      }

      for(var i = 0; i < this.data.length; i++){
        this.carrinhoService.getProductsById(this.data[i]["id"], this.data[i]["idProduto"]).subscribe(result => {
          this.valorTotal += Number(result["valor"]);
          console.log((this.valorTotal));
          this.products.push({
            "idItem": result["idItem"],
            "name": result["nameof"],
            "quantidade": result["quantidade"],
            "urlImg": result["urlImg"],
            "valor": result["valor"]
          })
        });
      }
    });
  }

  quantidade = 0;

  increment(){
    this.quantidade++;
  }

  decrement(){
    this.quantidade--;
  }

  deleteItem(id: any){
    console.log(id);
    this.carrinhoService.deleteProductInCart(id).subscribe(result => {
      console.log(this.products);
    });
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i]['idItem'] == id){
        this.valorTotal = this.valorTotal - this.products[i]["valor"];
        this.products.splice(i, 1);
      }
    }
  }
}
