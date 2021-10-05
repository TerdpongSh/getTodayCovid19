import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCaseComponent } from './today-case.component';

describe('TodayCaseComponent', () => {
  let component: TodayCaseComponent;
  let fixture: ComponentFixture<TodayCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
