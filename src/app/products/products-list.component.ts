import {Component, Input} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'products-list',
  template: `
    <ul class="collection">
      <div *ngIf="products.length === 0">No products could not be found.</div>
      <li *ngFor="let product of products" class="collection-item avatar">
        <img src="{{product.image}}" alt="" class="circle">
        <span class="title">{{product.title}}</span>
        <p>{{product.rating}} / 5.0</p>
        <span class="secondary-content">{{product.price}}{{product.currency}}</span>
      </li>
    </ul>
  `
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
}
