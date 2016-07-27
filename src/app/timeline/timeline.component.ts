import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';


@Component({
  selector: 'biznas-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  title = '';
  subtitle = '';
  button = '';
  constructor(private router: Router, public appState: AppState) {

  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    this.title = this.appState.state.title;
    this.subtitle = this.appState.state.subtitle;
    this.button = this.appState.state.button;
    console.log('hello `TimelineComponent` this.title', this.appState.state.title);
    console.log('hello `TimelineComponent`  this.subtitle', this.appState.state.subtitle);
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
