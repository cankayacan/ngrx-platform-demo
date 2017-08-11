import {Component, EventEmitter, Output} from '@angular/core';
import {Filters} from './filter.model';

@Component({
  selector: 'products-search',
  styles: [`
    .search-row {
      margin-bottom: 0;
    }
  `],
  template: `
    <div class="row search-row">
      <div class="col s12"><input [ngModel]="search" (ngModelChange)="searchChange.emit({searchText: $event})"
                                  placeholder="Search for products here..."></div>
    </div>
  `
})
export class ProductsSearchComponent {
  search = '';
  @Output() searchChange = new EventEmitter<Filters>();
}
