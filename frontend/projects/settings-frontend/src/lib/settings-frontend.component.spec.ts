import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFrontendComponent } from './settings-frontend.component';

describe('SettingsFrontendComponent', () => {
  let component: SettingsFrontendComponent;
  let fixture: ComponentFixture<SettingsFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
