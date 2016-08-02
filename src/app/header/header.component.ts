import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppState } from '../app.service';

import { HeaderContent } from './header.content';

@Component({
  selector: 'biznas-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.css'],
  directives: [
    ...ROUTER_DIRECTIVES
  ],
})

export class HeaderComponent {

  @Input()
  public content: HeaderContent;

  constructor(private router: Router, public appState: AppState) {
  }
}
