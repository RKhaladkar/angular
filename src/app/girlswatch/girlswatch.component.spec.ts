import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlswatchComponent } from './girlswatch.component';

describe('GirlswatchComponent', () => {
  let component: GirlswatchComponent;
  let fixture: ComponentFixture<GirlswatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlswatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlswatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
