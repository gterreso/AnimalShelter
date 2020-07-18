import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedAdminComponent } from './breed-admin.component';

describe('BreedAdminComponent', () => {
  let component: BreedAdminComponent;
  let fixture: ComponentFixture<BreedAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
