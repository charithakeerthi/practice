import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSummaryComponent } from './detail-summary.component';

describe('DetailSummaryComponent', () => {
  let component: DetailSummaryComponent;
  let fixture: ComponentFixture<DetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
