import * as fromProducts from './products.actions';
import {Product} from './product.model';
import {Filters} from './filter.model';
import {SortDirection} from './sort-direction.enum';

export interface State {
  products: Product[];
  filteredProducts: Product[];
  filters: Filters;
}

const initialState: State = {
  products: [],
  filteredProducts: [],
  filters: {
    searchText: '',
    showSpecialOffersOnly: false,
    sortByField: '',
    sortDirection: SortDirection.Descending
  }
};

export function reducer(state: State = initialState, action: fromProducts.Actions) {
  switch (action.type) {
    case fromProducts.PRODUCTS_RESULT_ACTION: {
      return {...state, ...{products: action.payload, filteredProducts: action.payload}};
    }
    case fromProducts.PRODUCTS_FILTER_ACTION: {
      return applyFilter(state, action.payload);
    }
    default: {
      return state;
    }
  }
}

/**
 * Applies the new set of filters to the products list
 * and returns a new state with the new filtered products.
 */
function applyFilter(state: State, filters: Filters): State {
  const newFilters = {...state.filters, ...filters};
  newFilters.sortDirection = +newFilters.sortDirection; // ensure enum type
  let newFilteredProducts = [...state.products];
  if (newFilters.searchText) {
    newFilteredProducts = newFilteredProducts.filter((product) => includesSearchText(product.title, newFilters.searchText));
  }
  if (newFilters.showSpecialOffersOnly) {
    newFilteredProducts = newFilteredProducts.filter(product => product.isSpecialOffer);
  }
  if (newFilters.sortByField !== '') {
    newFilteredProducts = sortByField(newFilteredProducts, newFilters.sortByField, newFilters.sortDirection);
  }
  return {...state, ...{ filteredProducts: newFilteredProducts,  filters: newFilters }};
}

/**
 * primitive filtering by checking "startsWith" word by word
 */
function includesSearchText(content: string, searchText: string): boolean {
  const searchWords = searchText.split(' ');
  const contentWords = content.split(' ');
  return searchWords.every(searchWord =>
    contentWords.some(word => word.toUpperCase().startsWith(searchWord.toUpperCase()))
  );
}

function sortByField(products: Product[], field: string, direction: SortDirection) {
  return products.sort((a, b) => direction === SortDirection.Ascending ? a[field] - b[field] : b[field] - a[field]);
}
