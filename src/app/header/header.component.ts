import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppState } from '../app.service';


@Component({
  selector: 'biznas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [
    ...ROUTER_DIRECTIVES
  ],
})

export class HeaderComponent implements OnInit {

  @Input() headerData: any;

  public title: string;

  public subtitle: string;
  public button: string;


  constructor(private router: Router, public appState: AppState) {

  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    this.title = this.headerData.title;
    this.subtitle = this.headerData.subtitle;
    this.button = this.headerData.button;
    //console.log('hello `HeaderComponent` this.title', this.appState.state.title);
    console.log('hello `HeaderComponent`  this.headerData', this.headerData);
 }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
