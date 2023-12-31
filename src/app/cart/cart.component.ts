import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  cartItems = this.cartService.getCartItems();

}
