/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { CopyrightComponent } from '../biznas/copyright/index';
import { NavbarComponent } from '../biznas/navbar/index';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  templateUrl: './app.template.html',
  directives: [ CopyrightComponent, NavbarComponent ],

})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {
  }
}
