import { Component } from '@angular/core';
import { StructuresPresenter } from './store';
import { StructuresService } from './services/structures.service';

@Component({
  selector: 'structures-container',
  templateUrl: './structures.container.html',
})
export class StructuresContainer {

  constructor(
    private structuresStore: StructuresPresenter,
    private structuresService: StructuresService
  ){}

  ngOnInit(): void {
    this.setPedidos()
  }

  setPedidos() {
    this.structuresService.getExamples().subscribe(
      (response) => {
        if (response) {
          this.structuresStore.setPedidos(response)
        }
      }
    )
  }

}
