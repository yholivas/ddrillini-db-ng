import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackListComponent } from './pack-list/pack-list.component';
import { PackCreateComponent } from './pack-create/pack-create.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "pack-create", component: PackCreateComponent},
  {path: "pack-list", component: PackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
