import { Component } from '@angular/core';
import { contentSettings as contentSettings } from './content-settings';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  //styleUrls: ['./nav.component.scss']
})
export class SideNavComponent {

  ngOnInit(): void {
    console.log(contentSettings)
  }

  showFiller = false;
}
