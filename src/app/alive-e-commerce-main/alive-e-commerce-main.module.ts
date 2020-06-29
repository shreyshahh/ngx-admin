import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AliveECommerceMainComponent } from './alive-e-commerce-main.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { AliveECommerceMainRoutingModule } from './alive-e-commerce-main-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    AliveECommerceMainRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [AliveECommerceMainComponent],
})
export class AliveECommerceMainModule {
}
