import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';


@Component({
  selector: 'biznas-testimonial-item',
  templateUrl: './testimonial-item.template.html',
  styleUrls: ['./testimonial-item.style.css'],
})

export class TestimonialItem { // implements OnInit {
  @Input()
  public content: any[];

  //title = '';
  //timelineItems: any[];
  //footer = '';
  constructor(private router: Router, public appState: AppState) {
  }
}
