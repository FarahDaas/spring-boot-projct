import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllmedcinRoutingModule } from './allmedcin-routing.module';
import { AllmedcinComponent } from './allmedcin/allmedcin.component';


@NgModule({
  declarations: [
    AllmedcinComponent
  ],
  imports: [
    CommonModule,
    AllmedcinRoutingModule
  ]
})
export class AllmedcinModule { }
