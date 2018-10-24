import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusaComponent } from './virtusa.component';

describe('VirtusaComponent', () => {
  let component: VirtusaComponent;
  let fixture: ComponentFixture<VirtusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
