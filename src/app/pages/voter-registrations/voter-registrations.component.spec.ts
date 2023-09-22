import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterRegistrationsComponent } from './voter-registrations.component';

describe('VoterRegistrationsComponent', () => {
  let component: VoterRegistrationsComponent;
  let fixture: ComponentFixture<VoterRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterRegistrationsComponent]
    });
    fixture = TestBed.createComponent(VoterRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
