import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsFrontendService {

  CurrentSettings: Observable<any>;
  private currentSettings = new BehaviorSubject<any>(null);
  constructor(
    private injector: Injector
  ) { }

  init() {
    this.injector.get('Messenger').on('Settings-Updated', (settings) => {
      this.currentSettings.next(settings);
    });
  }
}
