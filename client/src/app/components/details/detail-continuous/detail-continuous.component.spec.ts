import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContinuousComponent } from './detail-continuous.component';

describe('DetailContinuousComponent', () => {
  let component: DetailContinuousComponent;
  let fixture: ComponentFixture<DetailContinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
