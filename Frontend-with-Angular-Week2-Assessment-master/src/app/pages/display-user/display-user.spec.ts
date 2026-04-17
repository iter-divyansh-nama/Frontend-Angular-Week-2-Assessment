import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUser } from './display-user';

describe('DisplayUser', () => {
  let component: DisplayUser;
  let fixture: ComponentFixture<DisplayUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayUser],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
