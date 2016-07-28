import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppState } from '../../app/app.service';


@Component({
  selector: 'biznas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [
    ...ROUTER_DIRECTIVES
  ],
})

export class NavbarComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public button: string;
  constructor(private router: Router, public appState: AppState) {

  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    this.title = this.appState.state.title;
    this.subtitle = this.appState.state.subtitle;
    this.button = this.appState.state.button;
    console.log('hello `NavbarComponent` this.title', this.appState.state.title);
    console.log('hello `NavbarComponent` this.subtitle', this.appState.state.subtitle);
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
