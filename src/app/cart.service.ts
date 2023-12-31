import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: Product[] = [];

  getCartItems() {
    return this.items;
  }

  addToCart(product: Product) {
    const item = this.items.find((item) => item.id === product.id);

    if (item) {
      if (item.quantity) {
        item.quantity += 1;
      }
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeItem(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
