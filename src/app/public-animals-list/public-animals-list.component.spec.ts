import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAnimalsListComponent } from './public-animals-list.component';

describe('PublicAnimalsListComponent', () => {
  let component: PublicAnimalsListComponent;
  let fixture: ComponentFixture<PublicAnimalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAnimalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
