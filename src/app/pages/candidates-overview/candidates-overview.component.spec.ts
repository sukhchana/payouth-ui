import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesOverviewComponent } from './candidates-overview.component';

describe('CandidatesOverviewComponent', () => {
  let component: CandidatesOverviewComponent;
  let fixture: ComponentFixture<CandidatesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatesOverviewComponent]
    });
    fixture = TestBed.createComponent(CandidatesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
