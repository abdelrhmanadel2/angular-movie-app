import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductlistComponent 
  },
  { path: 'profile', component: ProfileComponent }
  ,
  { path: 'product/:id', component: ProductdetailsComponent},
  { path: 'cart', component: CartComponent}
  ,{ path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
