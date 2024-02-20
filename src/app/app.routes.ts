import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },

];
