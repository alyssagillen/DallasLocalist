import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleBoxComponent } from './rectangle-box.component';

describe('RectangleBoxComponent', () => {
  let component: RectangleBoxComponent;
  let fixture: ComponentFixture<RectangleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
