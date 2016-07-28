import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { MoreInfo } from '../../biznas/more-info/more-info.component';

console.log('`Platform` component loaded asynchronously');

@Component({
  selector: 'platform',
  styleUrls: ['./platform.style.css'],
  templateUrl: './platform.template.html',
  directives: [CommonPage, HeaderComponent, MoreInfo],
})

export class Platform {
  childHeaderData: any;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.childHeaderData = require('assets/platformdata.json');
    console.log('hello `Platform` childHeaderData', this.childHeaderData);

  }
}
