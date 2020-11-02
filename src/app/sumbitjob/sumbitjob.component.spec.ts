import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbitjobComponent } from './sumbitjob.component';

describe('SumbitjobComponent', () => {
  let component: SumbitjobComponent;
  let fixture: ComponentFixture<SumbitjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumbitjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumbitjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
