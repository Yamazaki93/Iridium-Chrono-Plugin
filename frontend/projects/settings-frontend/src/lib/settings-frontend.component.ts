import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'lib-settings-frontend',
  templateUrl: './settings-frontend.component.html',
  styles: []
})
export class SettingsFrontendComponent implements OnInit {

  imagePath = '';
  constructor(
    private injector: Injector
  ) { }

  ngOnInit() {
    this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.jpg');
  }

}
