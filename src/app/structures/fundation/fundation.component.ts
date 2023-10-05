import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fundationContentSettings } from './fundation-content.settings';
import { StructuresPresenter } from '../store';

@Component({
  selector: 'app-fundation',
  templateUrl: './fundation.component.html',
})
export class FundationComponent implements OnInit {

  public contentSettings: any = fundationContentSettings;
  public menuContents: any = this.contentSettings.sideMenu.list;
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  //API responses
  public demands!: Array<any>;

  constructor(
    private structuresStore: StructuresPresenter,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.startSubscriptions();
   }

  startSubscriptions() {
    this.structuresStore.pedidos$.subscribe((data: any) => {
        if (data) {
          this.demands = data
        }
      }
    )
  }

}
