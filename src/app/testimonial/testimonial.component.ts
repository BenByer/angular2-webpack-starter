import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';


@Component({
  selector: 'biznas-testimonial',
  templateUrl: './testimonial.template.html',
  styleUrls: ['./testimonial.style.css'],
})

export class Testimonial { // implements OnInit {
  @Input()
  public content: any[];

  //title = '';
  //timelineItems: any[];
  //footer = '';
  constructor(private router: Router, public appState: AppState) {
  }
}
