import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fundationContentSettings } from './fundation-content.settings';

@Component({
  selector: 'app-fundation',
  templateUrl: './fundation.component.html',
})

export class FundationComponent implements OnInit {

  ngOnInit() { }

  public contentSettings: any = fundationContentSettings;
  public menuContents: any = this.contentSettings.sideMenu.list;
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

}
