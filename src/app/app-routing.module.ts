import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AssistLayoutComponent } from './layouts/assist-layout/assist-layout.component';
import { AuthadminlayoutComponent } from './layouts/authadminlayout/authadminlayout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { MedcinLayoutComponent } from './layouts/medcin-layout/medcin-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
    {path:'allmedcin',loadChildren:()=>import('./views/admin/allmedcin/allmedcin.module').then(m=>m.AllmedcinModule)},
    {path:'addmedcin',loadChildren:()=>import('./views/admin/addmedcin/addmedcin.module').then(m=>m.AddmedcinModule)},

  ]},
  {path:'admin/login',component:AuthadminlayoutComponent},
  {path:'medcin',component:MedcinLayoutComponent},
  {path:'assist',component:AssistLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
