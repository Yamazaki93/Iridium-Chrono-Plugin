import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'lib-settings-frontend',
  templateUrl: './settings-frontend.component.html',
  styleUrls: [
    './settings-frontend.component.scss'
  ]
})
export class SettingsFrontendComponent implements OnInit {

  selectedLocale = 'en';
  imagePath = '';
  constructor(
    private injector: Injector
  ) { }

  ngOnInit() {
    this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.jpg');
  }

  setSettings() {

  }

}
