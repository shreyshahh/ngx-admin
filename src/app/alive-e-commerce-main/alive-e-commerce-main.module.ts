import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AliveECommerceMainComponent } from './alive-e-commerce-main.component';
import { AliveECommerceMainRoutingModule } from './alive-e-commerce-main-routing.module';
import { AliveCouponCodeMainComponent } from './alive-coupon-code-main/alive-coupon-code-main.component';

@NgModule({
  imports: [
    AliveECommerceMainRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [AliveECommerceMainComponent],
})
export class AliveECommerceMainModule {
}
