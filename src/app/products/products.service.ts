import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Product} from './product.model';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get('/assets/products.json').map(res => res.json());
  }
}
