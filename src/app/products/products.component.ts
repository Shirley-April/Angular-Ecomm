import { Component } from '@angular/core';
import { Product, products } from '../products';
import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [...products];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
