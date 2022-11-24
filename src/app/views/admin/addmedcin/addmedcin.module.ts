import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmedcinRoutingModule } from './addmedcin-routing.module';
import { AddmedcinComponent } from './addmedcin.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AddmedcinComponent,
    
  ],
  imports: [
    CommonModule,
    AddmedcinRoutingModule,
    
    FormsModule,
    
    
    
  ]
})
export class AddmedcinModule { }
