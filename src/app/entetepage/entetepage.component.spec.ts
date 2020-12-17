import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntetepageComponent } from './entetepage.component';

describe('EntetepageComponent', () => {
  let component: EntetepageComponent;
  let fixture: ComponentFixture<EntetepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntetepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntetepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
