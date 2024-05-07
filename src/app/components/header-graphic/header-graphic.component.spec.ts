import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGraphicComponent } from './header-graphic.component';

describe('HeaderGraphicComponent', () => {
  let component: HeaderGraphicComponent;
  let fixture: ComponentFixture<HeaderGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
