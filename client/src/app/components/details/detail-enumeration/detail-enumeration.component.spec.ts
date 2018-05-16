import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEnumerationComponent } from './detail-enumeration.component';

describe('DetailEnumerationComponent', () => {
  let component: DetailEnumerationComponent;
  let fixture: ComponentFixture<DetailEnumerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEnumerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEnumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
