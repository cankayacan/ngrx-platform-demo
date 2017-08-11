import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FlexLayoutModule} from '@angular/flex-layout'

import {AppComponent} from './app.component';
import {reducers} from './app.reducers';
import {ProductService} from './products/products.service';
import {ProductsContainerComponent} from './products/products-container.component';
import {ProductsFilterComponent} from './products/products-filter.component';
import {ProductsEffects} from './products/products.effects';
import {ProductsListComponent} from './products/products-list.component';
import {ProductsSearchComponent} from './products/products-search.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    ProductsListComponent,
    ProductsFilterComponent,
    ProductsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProductsEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 50})
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
