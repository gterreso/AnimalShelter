import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalComponent } from './admin-animals.component';

describe('AdminAnimalComponent', () => {
  let component: AdminAnimalComponent;
  let fixture: ComponentFixture<AdminAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
