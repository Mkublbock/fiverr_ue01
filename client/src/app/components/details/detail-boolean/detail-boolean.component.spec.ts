import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBooleanComponent } from './detail-boolean.component';

describe('DetailBooleanComponent', () => {
  let component: DetailBooleanComponent;
  let fixture: ComponentFixture<DetailBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
