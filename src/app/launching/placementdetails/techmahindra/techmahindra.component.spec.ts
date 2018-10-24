import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechmahindraComponent } from './techmahindra.component';

describe('TechmahindraComponent', () => {
  let component: TechmahindraComponent;
  let fixture: ComponentFixture<TechmahindraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechmahindraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechmahindraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
