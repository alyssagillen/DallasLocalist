import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowHeadingComponent } from './arrow-heading.component';

describe('ArrowHeadingComponent', () => {
  let component: ArrowHeadingComponent;
  let fixture: ComponentFixture<ArrowHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
