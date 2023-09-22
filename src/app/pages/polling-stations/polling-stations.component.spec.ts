import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingStationsComponent } from './polling-stations.component';

describe('PollingStationsComponent', () => {
  let component: PollingStationsComponent;
  let fixture: ComponentFixture<PollingStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollingStationsComponent]
    });
    fixture = TestBed.createComponent(PollingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
