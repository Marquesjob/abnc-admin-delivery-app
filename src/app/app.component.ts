import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Sabor e Empatia';

  public contentSettings: any = {
  list: [
    { name: 'Dashboard', routerLink: '#', icon: '#' },
    { name: 'Emitir Comanda', routerLink: '#', icon: '#' },
    { name: 'Gerar Pedido', routerLink: '#', icon: '#' },
  ]
  };

  public menuContents: any = this.contentSettings.list;
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  //API responses
  public demands!: Array<any>;

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }


}
