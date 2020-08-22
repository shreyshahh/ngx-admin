import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AliveFrameLensMaterialMainComponent } from './alive-frame-lens-material-main.component';



@NgModule({
  declarations: [AliveFrameLensMaterialMainComponent],
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
export class AliveFrameLensMaterialMainModule { }
