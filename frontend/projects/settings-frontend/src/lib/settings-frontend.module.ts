import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsFrontendComponent } from './settings-frontend.component';
import { SettingsFrontendService } from './settings-frontend.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SettingsFrontendComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [SettingsFrontendComponent],
  providers: [
    SettingsFrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initModule,
      multi: true,
      deps: [SettingsFrontendService]
    }
  ]
})
export class SettingsFrontendModule { }

export function initModule(sfs: SettingsFrontendService) {
  const x = 1; // hack for tsc
  return function() {
    sfs.init();
    return Promise.resolve();
  };
}
