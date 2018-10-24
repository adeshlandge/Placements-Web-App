import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementdetailsComponent } from './placementdetails.component';

describe('PlacementdetailsComponent', () => {
  let component: PlacementdetailsComponent;
  let fixture: ComponentFixture<PlacementdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
