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
  subtitle = '';
  button = '';
  constructor(private router: Router, public appState: AppState) {
  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    this.title = this.timelineData.title;
    this.subtitle = this.appState.state.subtitle;
    this.timelineItems = this.timelineData.timeline;
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
