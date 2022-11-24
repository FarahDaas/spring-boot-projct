import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmedcinComponent } from './allmedcin/allmedcin.component';

const routes: Routes = [
  {path:'',component:AllmedcinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllmedcinRoutingModule { }
