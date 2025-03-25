import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
      <!-- CHANGED: Responsive grid with breakpoints -->
      <div class="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product"/>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 5,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      stock: 7,
    },
    {
      id: 5,
      title: 'WD 2TB Elements Portable External Hard Drive',
      price: 64.99,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      stock: 12
    },
    {
      id: 6,
      title: 'SanDisk SSD PLUS 1TB Internal SSD',
      price: 109.99,
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      stock: 3
    },
{
  id: 7,
  title: 'Silicon Power 256GB SSD',
  price: 109.99,
  image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  stock: 8
},
{
  id: 8,
  title: 'WD 4TB Gaming Drive',
  price: 114.99,
  image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  stock: 15
},
{
  id: 9,
  title: 'Acer SB220Q Monitor',
  price: 89.99,
  image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  stock: 2
},
{
  id: 10,
  title: 'Samsung 49-Inch QLED Gaming Monitor',
  price: 999.99,
  image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  stock: 15,
},
{
  id: 11,
  title: 'iPhone 12 Pro Max',
  price: 1099.99,
  image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  stock: 8,
},
{
  id: 12,
  title: 'Logitech MX Master 3 Advanced Wireless Mouse',
  price: 99.99,
  image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  stock: 20,
},
]);
}
