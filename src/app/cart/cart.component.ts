import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  cartItems = this.cartService.getCartItems();
  cartTotal = this.cartService.calculateTotalPrice();

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  addQuantity(item: Product) {
    this.cartService.addToCart(item);
  }

  decreaseQuantity(id: number) {
    this.cartService.decreaseQuantity(id);
  }
}
