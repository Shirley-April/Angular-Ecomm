import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  getCartItems() {
    return this.items;
  }

  calculateTotalPrice = (): string => {
    let totalPrice = 0;

    const convertPriceToNumber = (price: string): number => {
      return parseFloat(price.replace('$', ''));
    };

    // Iterate through the products and add their prices
    this.items.forEach((product) => {
      const productPrice = convertPriceToNumber(product.price);
      const productQuantity = product.quantity || 1; // Assuming a quantity of 1 if not specified
      totalPrice += productPrice * productQuantity;
    });

    return totalPrice.toFixed(2)
  };

  addToCart(product: Product) {
    const item = this.items.find((item) => item.id === product.id);

    if (item) {
      if (item.quantity) {
        item.quantity += 1;
      }
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeItem(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
    }

    const storedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const filtered = storedItems.filter(
      (item: { id: number }) => item.id === id
    );
    localStorage.setItem('cart', JSON.stringify(filtered));
  }

  addQuantity(id: number) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      if (item.quantity) {
        item.quantity += 1;
      }
    }
  }

  decreaseQuantity(id: number) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      if (item.quantity) {
        item.quantity = item.quantity === 1 ? 1 : (item.quantity -= 1);
      }
    }
  }
}
