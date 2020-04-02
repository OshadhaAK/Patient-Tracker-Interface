import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuarantineeComponent } from './new-quarantinee.component';

describe('NewQuarantineeComponent', () => {
  let component: NewQuarantineeComponent;
  let fixture: ComponentFixture<NewQuarantineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuarantineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuarantineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
