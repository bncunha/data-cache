import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDataCacheComponent } from './ng-data-cache.component';

describe('NgDataCacheComponent', () => {
  let component: NgDataCacheComponent;
  let fixture: ComponentFixture<NgDataCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDataCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDataCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
