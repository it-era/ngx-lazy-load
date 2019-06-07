import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLazyLoadComponent } from './ngx-lazy-load.component';

describe('NgxLazyLoadComponent', () => {
  let component: NgxLazyLoadComponent;
  let fixture: ComponentFixture<NgxLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
