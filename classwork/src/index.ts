// index.ts

/* eslint-disable no-console */

import { getAvailableProducts, getTotalPrice, products } from "./ts/task1";
console.log(getAvailableProducts(products));
console.log("Общая цена всех товаров:", getTotalPrice(products));

import Cart from "./ts/Cart";
const cart = new Cart;
cart.add({
  id: 1,
  name: 'Война и Мир',
  price: 530,
})
console.log(cart.items)