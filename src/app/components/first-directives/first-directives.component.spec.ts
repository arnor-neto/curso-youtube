import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDirectivesComponent } from './first-directives.component';

describe('FirstDirectivesComponent', () => {
  let component: FirstDirectivesComponent;
  let fixture: ComponentFixture<FirstDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
