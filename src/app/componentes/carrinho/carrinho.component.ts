import { Produtos } from 'src/app/https/models/produtos';
import { CarrinhoService } from './../../https/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/https/models/carrinho';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService, private route: Router, public dialog: MatDialog) { }

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
          this.valorTotal += Number((result["valor"] * result["quantidade"]));
          console.log((this.valorTotal));
          this.products.push({
            "idItem": result["idItem"],
            "idProduto": result["idProduto"],
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

  amountData:any = [];

  increment(id: number){
    console.log(this.products);
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i]["idItem"] == id){
        this.amountData = {
          "idItem": this.products[i]["idItem"],
          "idProduto":  this.products[i]["idProduto"],
          "quantidadeProduto":  this.products[i]["quantidade"] + 1,
          "valorProduto":  this.products[i]["valor"]
      };
      this.products[i]["quantidade"] = this.amountData["quantidadeProduto"];
      this.valorTotal += Number(this.amountData["valorProduto"]);
      }
    }
    console.log(this.amountData);
    this.carrinhoService.editAmount(id, this.amountData).subscribe(result => console.log(result));
    this.productsAmount = [];
  }

  decrement(id: number){
    console.log(this.products);
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i]["idItem"] == id){
        this.amountData = {
          "idItem": this.products[i]["idItem"],
          "idProduto":  this.products[i]["idProduto"],
          "quantidadeProduto":  this.products[i]["quantidade"] - 1,
          "valorProduto":  this.products[i]["valor"]
      };
      this.products[i]["quantidade"] = this.amountData["quantidadeProduto"];
      this.valorTotal -= Number(this.amountData["valorProduto"]);
      }
    }
    console.log(this.amountData);
    this.carrinhoService.editAmount(id, this.amountData).subscribe(result => console.log(result));
    this.productsAmount = [];
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


  toRoute(){
    this.dialog.closeAll();
    this.route.navigate(['/register']);
  }
}
