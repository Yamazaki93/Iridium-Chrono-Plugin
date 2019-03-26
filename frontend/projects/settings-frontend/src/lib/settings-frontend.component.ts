import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { SettingsFrontendService } from './settings-frontend.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-settings-frontend',
  templateUrl: './settings-frontend.component.html',
  styleUrls: [
    './settings-frontend.component.scss'
  ]
})
export class SettingsFrontendComponent implements OnInit, OnDestroy {

  selectedLocale = 'en';
  imagePath = '';
  removeMatched = false;
  private subscription: Subscription;
  constructor(
    private injector: Injector,
    private settings: SettingsFrontendService,
  ) { }

  ngOnInit() {
    this.subscription = this.settings.CurrentSettings.subscribe(cs => {
      if (cs) {
        if (cs.locale) {
          this.selectedLocale = cs.locale;
        }
        if(cs.removeMatched) {
          this.removeMatched = cs.removeMatched;
        }
      }
    });
    this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.jpg');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setSettings() {
    this.settings.setLocale(this.selectedLocale, this.removeMatched);
  }

}
