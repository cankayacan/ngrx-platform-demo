import {Action} from '@ngrx/store';
import {Product} from './product.model';

export const PRODUCTS_REQUEST_ACTION = '[Products] Request';
export class ProductsRequestAction implements Action {
  readonly type = PRODUCTS_REQUEST_ACTION;
}

export const PRODUCTS_RESULT_ACTION = '[Products] Result';
export class ProductsResultAction implements Action {
  readonly type = PRODUCTS_RESULT_ACTION;
  constructor(public payload: Product[]) {}
}

export const PRODUCTS_FILTER_ACTION = '[Products] Filter';
export class ProductsFilterAction implements Action {
  readonly type = PRODUCTS_FILTER_ACTION;
  constructor(public payload: any) {}
}

export type Actions = ProductsRequestAction | ProductsResultAction | ProductsFilterAction;
