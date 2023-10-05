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
import { StructuresContainer } from './structures.container';
import { StructuresPresenter } from './store';
import { StructuresService } from './services/structures.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StructuresContainer,
    FundationComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    NgFor,
    NgIf
  ],
  exports: [
    StructuresContainer
  ],
  providers: [
    StructuresPresenter,
    StructuresService
  ]
})
export class StructuresModule { }
