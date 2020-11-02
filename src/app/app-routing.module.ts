import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent } from './login/login.component';
import {AdminlogComponent } from './adminlog/adminlog.component';
//import {ViewjobComponent} from './viewjob/viewjob.component';
const routes: Routes = [ 
  { path: '' , component: LoginComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'adminlog' , component: AdminlogComponent},
 // { path: 'viewjob' , component: ViewjobComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
