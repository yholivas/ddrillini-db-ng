import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackListComponent } from './pack-list/pack-list.component';
import { HomeComponent } from './home/home.component';
import { SongListComponent } from './song-list/song-list.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "packs", component: PackListComponent},
  {path: "songs/:id", component: SongListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
