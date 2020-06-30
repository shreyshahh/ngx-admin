import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AliveECommerceMainComponent } from './alive-e-commerce-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
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
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
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
