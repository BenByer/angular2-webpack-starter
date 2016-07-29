import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';

import { TimelineItemContent } from './timeline-item.content';

@Component({
  selector: 'biznas-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})



export class TimelineItemComponent {
  @Input()
  public content: TimelineItemContent;

  constructor(private router: Router, public appState: AppState) {
  }
}
