import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#JHipster6Java11TestProductModule'
      },
      {
        path: 'address',
        loadChildren: './address/address.module#JHipster6Java11TestAddressModule'
      },
      {
        path: 'shopping-order',
        loadChildren: './shopping-order/shopping-order.module#JHipster6Java11TestShoppingOrderModule'
      },
      {
        path: 'product-order',
        loadChildren: './product-order/product-order.module#JHipster6Java11TestProductOrderModule'
      },
      {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#JHipster6Java11TestShipmentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipster6Java11TestEntityModule {}
