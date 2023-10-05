import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuresContainer } from './structures.container';


const routes: Routes = [
  { path: '', component: StructuresContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StructuresRoutingModule { }
