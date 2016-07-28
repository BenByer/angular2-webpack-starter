import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';

import { TimelineItemComponent } from '../timeline-item/timeline-item.component';

@Component({
  selector: 'biznas-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  directives: [ TimelineItemComponent ],
})

export class TimelineComponent implements OnInit {
  @Input() timelineData: any;
  title = '';
  timelineItems: any[];
  footer = '';
  constructor(private router: Router, public appState: AppState) {
  }

  ngOnInit() {
    this.title = this.timelineData.title;
    this.timelineItems = this.timelineData.timeline;
    this.footer = this.timelineData.footer;
 }
}
