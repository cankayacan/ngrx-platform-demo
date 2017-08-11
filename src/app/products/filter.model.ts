import {SortDirection} from './sort-direction.enum';

export interface Filters {
  searchText?: string;
  showSpecialOffersOnly?: boolean;
  sortByField?: string;
  sortDirection?: SortDirection;
}
