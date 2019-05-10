import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JHipster6Java11TestSharedModule } from 'app/shared';
import {
  ShoppingOrderComponent,
  ShoppingOrderDetailComponent,
  ShoppingOrderUpdateComponent,
  ShoppingOrderDeletePopupComponent,
  ShoppingOrderDeleteDialogComponent,
  shoppingOrderRoute,
  shoppingOrderPopupRoute
} from './';

const ENTITY_STATES = [...shoppingOrderRoute, ...shoppingOrderPopupRoute];

@NgModule({
  imports: [JHipster6Java11TestSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ShoppingOrderComponent,
    ShoppingOrderDetailComponent,
    ShoppingOrderUpdateComponent,
    ShoppingOrderDeleteDialogComponent,
    ShoppingOrderDeletePopupComponent
  ],
  entryComponents: [
    ShoppingOrderComponent,
    ShoppingOrderUpdateComponent,
    ShoppingOrderDeleteDialogComponent,
    ShoppingOrderDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipster6Java11TestShoppingOrderModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
