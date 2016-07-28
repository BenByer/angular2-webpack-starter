import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';

@Component({
  selector: 'biznas-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})

export class TimelineItemComponent implements OnInit {
  @Input() timelineItem: any;
  title = '';
  content = '';
  button = '';
  constructor(private router: Router, public appState: AppState) {

  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    this.title = this.timelineItem.title;
    this.content = this.timelineItem.content;
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
