import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products :Product[] = [];

  private baseUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  constructor() { }

  getCarItems():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/cart`);
  }
  addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/cart`,product);
  }
  clearCart(){
    return this.http.delete(`${this.baseUrl}/cart`);
  }



}
