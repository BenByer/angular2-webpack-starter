import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';


@Component({
  selector: 'biznas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
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
    console.log('hello `HeaderComponent` this.title', this.appState.state.title);
    console.log('hello `HeaderComponent`  this.subtitle', this.appState.state.subtitle);
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
