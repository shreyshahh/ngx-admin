import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AliveECommerceMainComponent } from './alive-e-commerce-main.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AliveUploadProductMainComponent } from './alive-upload-product-main/alive-upload-product-main.component';
import { AliveProductOrdersMainComponent } from './alive-product-orders-main/alive-product-orders-main.component';
// tslint:disable-next-line: max-line-length
import { AliveDeliveredProductsMainComponent } from './alive-delivered-products-main/alive-delivered-products-main.component';

const routes: Routes = [{
  path: '',
  component: AliveECommerceMainComponent,
  children: [
    {
      path: 'alive-upload-product-main',
      component: AliveUploadProductMainComponent,
    },
    {
      path: 'alive-product-orders-main',
      component: AliveProductOrdersMainComponent,
    },
    {
      path: 'alive-delivered-products-main',
      component: AliveDeliveredProductsMainComponent,
    },
    {
      path: '',
      redirectTo: 'alive-upload-product-main',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AliveECommerceMainRoutingModule {
}
