import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Filters} from './filter.model';
import {SortDirection} from './sort-direction.enum';

@Component({
  selector: 'products-filter',
  styles: [`
    .special-offers-card {
      padding: 10px 20px;
    }
  `],
  template: `
    <div class="card special-offers-card">
      <div>
        <input id="specialOffersOnly"
               type="checkbox"
               [ngModel]="filters.showSpecialOffersOnly"
               (ngModelChange)="onFilterChange({showSpecialOffersOnly: $event})">
        <label for="specialOffersOnly">Show Special Offers Only</label>
      </div>
    </div>
    <label>Sort by:</label>
    <div class="card">
      <ul class="collection">
        <li class="collection-item"
            [class.active]="filters.sortByField === ''"
            (click)="onFilterChange({sortByField: '', sortDirection: SortDirection.Descending})">
          Relevance
        </li>
        <li class="collection-item"
            [class.active]="filters.sortByField === 'rating' && filters.sortDirection === SortDirection.Descending"
            (click)="onFilterChange({sortByField: 'rating', sortDirection: SortDirection.Descending})">
          Best Rating
        </li>
        <li class="collection-item"
            [class.active]="filters.sortByField === 'price' && filters.sortDirection === SortDirection.Ascending"
            (click)="onFilterChange({sortByField: 'price', sortDirection: SortDirection.Ascending})">
          Price Low to High
        </li>
        <li class="collection-item"
            [class.active]="filters.sortByField === 'price' && filters.sortDirection === SortDirection.Descending"
            (click)="onFilterChange({sortByField: 'price', sortDirection: SortDirection.Descending})">
          Price High to Low
        </li>
      </ul>
    </div>
  `
})
export class ProductsFilterComponent {
  SortDirection = SortDirection;
  @Input() filters: Filters;
  @Output() filterChange = new EventEmitter<Filters>();

  onFilterChange(filter: Filters) {
    this.filterChange.emit(filter);
  }
}
