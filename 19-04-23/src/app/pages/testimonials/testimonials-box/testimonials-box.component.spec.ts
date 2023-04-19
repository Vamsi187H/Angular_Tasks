import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBoxComponent } from './testimonials-box.component';

describe('TestimonialsBoxComponent', () => {
  let component: TestimonialsBoxComponent;
  let fixture: ComponentFixture<TestimonialsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
