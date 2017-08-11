import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import {PRODUCTS_REQUEST_ACTION, ProductsResultAction} from './products.actions';
import {ProductService} from './products.service';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productService: ProductService) {
  }

  @Effect() getProductsEffect$: Observable<Action> = this.actions$.ofType(PRODUCTS_REQUEST_ACTION)
    .switchMap(() => this.productService.getProducts())
    .map((productsResult) => new ProductsResultAction(productsResult));
}
