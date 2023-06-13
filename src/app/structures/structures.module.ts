import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './nav/nav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    SideNavComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    SideNavComponent,
    MainComponent
  ]
})
export class StructuresModule { }
