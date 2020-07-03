import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliveFrameCategoryMainComponent } from './alive-frame-category-main.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [AliveFrameCategoryMainComponent],
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
export class AliveFrameCategoryMainModule { }
