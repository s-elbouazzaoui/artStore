import { Component, inject, OnInit } from '@angular/core';

import { ProductService } from '../Service/product.service';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CLASS_NAME, FlexLayoutModule } from '@ngbracket/ngx-layout';
import { NavbarComponent } from "../../navbar/navbar.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CartService } from '../../Cart/Services/cart.service';
import { ToastrService} from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatCardModule, FlexLayoutModule, CommonModule, MatIconModule,
    MatInputModule,FlexLayoutModule,MatButtonModule,MatToolbar,MatToolbarRow,RouterModule,MatSelectModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];

  sortOrder : string="";

  private productSrvc = inject(ProductService);

  filteredProducts: Product[] = [];

  constructor(private toast:ToastrService) { }

  getProducts(){
    this.productSrvc.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    })
  }

  addToCart(product:Product){

    this.productSrvc.addProductToStorage(product);

    this.toast.success(" added to cart","sucess",{
      progressAnimation:"increasing",
      timeOut:1000,
      progressBar:true,
      positionClass:'sucess'
    });
    
    }


    applyFilter(event: Event):void {
      let searchTerm = (event.target as HTMLInputElement).value;
      searchTerm = searchTerm.toLocaleLowerCase(); 
      this.filteredProducts = this.products.filter(
        product=>product.name.toLocaleLowerCase().includes(searchTerm)
      )

      this.sortProduct(this.sortOrder)
    }

    sortProduct(sortValue:string){
      this.sortOrder = sortValue;
      if(this.sortOrder ==="priceLowHigh"){this.filteredProducts.sort((a,b)=>a.price - b.price)}
      else if(this.sortOrder==="priceHighLow"){this.filteredProducts.sort((a,b)=>b.price - a.price)}
          
    }

      

  



  ngOnInit(): void {

    this.getProducts();

  }




}
