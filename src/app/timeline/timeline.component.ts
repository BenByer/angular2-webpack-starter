import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';

import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { TimelineContent } from './timeline.content';

@Component({
  selector: 'biznas-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  directives: [ TimelineItemComponent ],
})

export class TimelineComponent { // implements OnInit {
  @Input()
  public content: TimelineContent;

  //title = '';
  //timelineItems: any[];
  //footer = '';
  constructor(private router: Router, public appState: AppState) {
  }
}
