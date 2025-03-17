import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { Product } from '../../Models/product';
import { CartService } from '../Services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { retry } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../Product/Service/product.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CheckOutComponent } from "../../check-out/check-out.component";



@Component({
  selector: 'app-cart',
  imports: [NavbarComponent, MatCardModule, MatListModule, CommonModule, MatButtonModule, MatDialogModule, CheckOutComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
 

  cartItems:Product[] = [];
  Items:any[]=[];

  totalPrice:number=0;

  private cartService = inject(CartService)

  private productService = inject(ProductService)

  constructor(private dialog : MatDialog){}


  getItems(){
    this.cartService.getCarItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getStorageItems(){
    this.Items = this.productService.getCartItems();
    this.totalPrice = this.productService.getTotalPrice(); 
  }

  getTotalPrice():number{
    return this.productService.getTotalPrice()
}

checkout(templateRef: TemplateRef<any>) {
  this.dialog.open(templateRef)
}



openDialog(templateRef: TemplateRef<any>) {
   this.dialog.open(templateRef)//,{
  //   position :{
  //     top : '20px'
  //   }  this is how we adjust the positon of the modal 
  // });
}

confirmClearCart() {
  this.Items = [];
  this.totalPrice = 0;
  console.log('Cart cleared!');
  this.productService.clearCart();
}
  
  
  ngOnInit(): void {
    

    this.getStorageItems();
    
    
  }
}



