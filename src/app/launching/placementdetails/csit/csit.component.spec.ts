import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsitComponent } from './csit.component';

describe('CsitComponent', () => {
  let component: CsitComponent;
  let fixture: ComponentFixture<CsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
