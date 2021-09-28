import { Produtos } from 'src/app/https/models/produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrinho } from './models/carrinho';
import { CartProdutos } from './models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly endPoint = "http://localhost:5000/api/Cart"
  private readonly endPointProduto = "http://localhost:5000/api/Produto"

  constructor(private http: HttpClient) { }



  getProductsInCart(){
    return this.http.get<Carrinho[]>(this.endPoint);
  }

  getProductsById(idItem: any, idProduct: any){
    return this.http.get<CartProdutos>(`${this.endPoint}/${idItem}/${idProduct}`);
  }


  deleteProductInCart(id: any){
    return this.http.delete<any>(`${this.endPoint}/${id}`);
  }

  editAmount(id: number, body: any[]){
    console.log(body);
    return this.http.put<Carrinho[]>(`${this.endPoint}/${id}`, body);
  }

}
