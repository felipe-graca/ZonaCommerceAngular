import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrinho } from './models/carrinho';
import { Produtos } from './models/produtos';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private readonly endPoint = "http://localhost:5000/api/Produto"
  private readonly endPointCart = "http://localhost:5000/api/Cart"

  constructor(private http: HttpClient) { }



  getProducts(){
    return this.http.get<Produtos[]>(this.endPoint);
  }

  addItemInCart(itemCarrinho: any){
    return this.http.post<Carrinho>(this.endPointCart, itemCarrinho, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      )
    }).subscribe();
  }

}
