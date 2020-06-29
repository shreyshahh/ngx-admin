import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule,
  NbCardModule, NbButtonModule, NbListModule, NbAccordionModule,
  NbUserModule, NbInputModule, NbActionsModule, NbCheckboxModule,
  NbRadioModule, NbDatepickerModule,
  NbSelectModule, NbIconModule, NbAutocompleteModule } from '@nebular/theme';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { AliveUploadProductMainComponent } from './alive-upload-product-main.component';
import { FormsRoutingModule } from '../forms/forms-routing.module';



@NgModule({
  declarations: [AliveUploadProductMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    NbInputModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbAutocompleteModule,

  ],

})
export class AliveUploadProductMainModule { }
