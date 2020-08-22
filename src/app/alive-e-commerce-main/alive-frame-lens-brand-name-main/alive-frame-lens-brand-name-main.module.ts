import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AliveFrameLensBrandNameMainComponent } from './alive-frame-lens-brand-name-main.component';



@NgModule({
  declarations: [AliveFrameLensBrandNameMainComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
  ]
})
export class AliveFrameLensBrandNameMainModule { }
