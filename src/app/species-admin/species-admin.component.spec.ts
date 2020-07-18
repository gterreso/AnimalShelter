import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesAdminComponent } from './species-admin.component';

describe('SpeciesAdminComponent', () => {
  let component: SpeciesAdminComponent;
  let fixture: ComponentFixture<SpeciesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
