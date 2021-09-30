import { CarrinhoService } from './../../https/carrinho.service';
import { HomeServiceService } from './../../https/home-service.service';
import { SnackComponent } from './../../componentes/Snack/Snack.component';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Produtos } from 'src/app/https/models/produtos';
import { timer } from 'rxjs';
import { Carrinho } from 'src/app/https/models/carrinho';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private homeService: HomeServiceService, private carrinhoService: CarrinhoService) {localStorage.removeItem('tokenJet')}

  durationInSeconds = 5;

  produtos: Produtos[];
  itemCart: Carrinho;
  data: any = [];
  dataProduct: any = [];

  openSnackBar(id: number) {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: this.durationInSeconds * 1000,
    });

    for(var i = 0; i < this.produtos.length; i++){
      if(this.produtos[i]["idProduto"] == id){
        this.itemCart = {
          idProduto: id,
          quantidadeProduto: 1,
          valorProduto: this.produtos[i]["valorProduto"],
          idItem: 0
        }
      }
    }

    this.carrinhoService.getProductsByIdProduct(id).subscribe(result => {
      if(result == null){

        this.homeService.addItemInCart(this.itemCart);

      } else {
        this.dataProduct = {
          "idItem": result["idItem"],
          "idProduto":  result["idProduto"],
          "quantidadeProduto":  result["quantidadeProduto"] + 1,
          "valorProduto":  result["valorProduto"]
        };
        this.carrinhoService.editAmount(result["idItem"], this.dataProduct).subscribe(result => {});
        }
      }
    )
  }



  ngOnInit() {
    this.homeService.getProducts().subscribe((result) => {
      this.produtos = result;
      for(var i = 0; i < this.produtos.length; i++){
        this.data.push(
          {'id': this.produtos[i]["idProduto"], 'nome': this.produtos[i]["nomeProduto"], 'preco': this.produtos[i]["valorProduto"], 'img': this.produtos[i]["urlImg"] }
        )
      }
    });
  }

}
