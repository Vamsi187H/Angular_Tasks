import { Component } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimoniallist: any;
  constructor(private hs: TestimonialsService) {
    this.hs.getTestimonials().subscribe({
      next: (data: any) => (this.testimoniallist = data),
      error: () => (this.testimoniallist = []),
    });
  }
}
