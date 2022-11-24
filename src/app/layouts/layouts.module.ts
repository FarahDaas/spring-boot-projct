import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { MedcinLayoutComponent } from './medcin-layout/medcin-layout.component';
import { AssistLayoutComponent } from './assist-layout/assist-layout.component';
import { RouterModule } from '@angular/router';
import { AuthadminlayoutComponent } from './authadminlayout/authadminlayout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    MedcinLayoutComponent,
    AssistLayoutComponent,
    AuthadminlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
