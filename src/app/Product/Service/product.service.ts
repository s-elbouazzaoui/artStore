import { inject, Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Product } from '../../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  cart: any[] = []

  private baseUrl = 'http://localhost:3000';

  private http = inject(HttpClient);


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }





  addProductToStorage(product:any){
    this.cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  
  clearCart(){
    this.cart = []; 
    localStorage.removeItem('cart'); 
  }


  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
    
  }
  

  updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/update/${id}`, product);
  }



  getTotalPrice(): number {
    const cart = this.getCartItems();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
