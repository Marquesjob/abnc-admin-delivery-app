import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor } from '@angular/common';

//Components
import { FundationComponent } from './fundation/fundation.component';
import { StructuresComponent } from './structures.container';
import { ManagementModule } from '../management/management.module';



@NgModule({
  declarations: [
    StructuresComponent,
    FundationComponent,
  ],
  imports: [
    ManagementModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    NgIf
  ],
  exports: [
    FundationComponent
  ]
})
export class StructuresModule { }
