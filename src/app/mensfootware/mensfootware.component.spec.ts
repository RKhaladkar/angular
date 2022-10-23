import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensfootwareComponent } from './mensfootware.component';

describe('MensfootwareComponent', () => {
  let component: MensfootwareComponent;
  let fixture: ComponentFixture<MensfootwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensfootwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensfootwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
