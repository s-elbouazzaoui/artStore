import { Routes } from '@angular/router';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { CartComponent } from './Cart/cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';


export const routes: Routes = [

    //{path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: '', component: ProductListComponent},
    {path:'cart',component:CartComponent},
    {path:'pay',component:CheckOutComponent}



];
