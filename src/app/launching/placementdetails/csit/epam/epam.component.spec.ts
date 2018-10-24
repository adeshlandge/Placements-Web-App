import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpamComponent } from './epam.component';

describe('EpamComponent', () => {
  let component: EpamComponent;
  let fixture: ComponentFixture<EpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
