import {Component, OnInit} from '@angular/core';
import * as fromRoot from '../app.reducers';
import {Store} from '@ngrx/store';
import {ProductsFilterAction, ProductsRequestAction} from './products.actions';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.model';
import {Filters} from './filter.model';

@Component({
  selector: 'products-container',
  template: `
    <products-search (searchChange)="onFilterChange($event)"></products-search>
    <div class="row">
      <products-filter class="col s12 m4" [filters]="filters | async"
                    (filterChange)="onFilterChange($event)"></products-filter>
      <products-list class="col s12 m8" [products]="products | async"></products-list>
    </div>
  `
})
export class ProductsContainerComponent implements OnInit {
  products: Observable<Product[]>;
  filters: Observable<Filters>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.products = store.select((appState) => appState.products.filteredProducts);
    this.filters = store.select((appState) => appState.products.filters);
  }

  ngOnInit() {
    this.store.dispatch(new ProductsRequestAction());
  }

  onFilterChange(filter: any) {
    this.store.dispatch(new ProductsFilterAction(filter));
  }
}
