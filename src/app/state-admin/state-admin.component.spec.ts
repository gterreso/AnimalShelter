import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAdminComponent } from './state-admin.component';

describe('StatusAdminComponent', () => {
  let component: StateAdminComponent;
  let fixture: ComponentFixture<StateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
