import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsbagComponent } from './girlsbag.component';

describe('GirlsbagComponent', () => {
  let component: GirlsbagComponent;
  let fixture: ComponentFixture<GirlsbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsbagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlsbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
