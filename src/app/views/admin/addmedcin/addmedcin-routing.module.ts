import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmedcinComponent } from './addmedcin.component';

const routes: Routes = [
  {path:'',component:AddmedcinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddmedcinRoutingModule { }
