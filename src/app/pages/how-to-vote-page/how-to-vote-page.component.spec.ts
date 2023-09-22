import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToVotePageComponent } from './how-to-vote-page.component';

describe('HowToVotePageComponent', () => {
  let component: HowToVotePageComponent;
  let fixture: ComponentFixture<HowToVotePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToVotePageComponent]
    });
    fixture = TestBed.createComponent(HowToVotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
