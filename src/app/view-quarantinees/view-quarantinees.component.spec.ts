import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuarantineesComponent } from './view-quarantinees.component';

describe('ViewQuarantineesComponent', () => {
  let component: ViewQuarantineesComponent;
  let fixture: ComponentFixture<ViewQuarantineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuarantineesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuarantineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
