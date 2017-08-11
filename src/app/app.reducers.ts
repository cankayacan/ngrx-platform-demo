import * as fromProducts from './products/products.reducers';

export const reducers = {
  products: fromProducts.reducer
};

export interface AppState {
  products: fromProducts.State;
}
