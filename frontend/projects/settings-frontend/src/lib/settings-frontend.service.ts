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
  ) {
    this.CurrentSettings = this.currentSettings.asObservable();
  }

  init() {
    this.injector.get('Messenger').on('Settings-Updated', (settings) => {
      this.currentSettings.next(settings);
    });
    this.injector.get('Messenger').Send('Settings-Initialize', {});
  }
  setLocale(locale: string) {
    this.injector.get('Messenger').Send('Settings-SetLocale', {
      locale
    });
  }
}
