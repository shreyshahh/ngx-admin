import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliveProductOrdersMainComponent } from './alive-product-orders-main.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { UserDetailsLinkComponent } from './user-details-link/user-details-link.component';
import { DeliveryStatusButtonComponent } from './delivery-status-button/delivery-status-button.component';



@NgModule({
  declarations: [AliveProductOrdersMainComponent, DeliveryStatusButtonComponent, UserDetailsLinkComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
  ],
})
export class AliveProductOrdersMainModule { }
