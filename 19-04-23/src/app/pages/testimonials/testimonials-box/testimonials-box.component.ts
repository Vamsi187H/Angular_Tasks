import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials-box',
  templateUrl: './testimonials-box.component.html',
  styleUrls: ['./testimonials-box.component.css'],
})
export class TestimonialsBoxComponent {
  @Input() testimonial: any;
}
