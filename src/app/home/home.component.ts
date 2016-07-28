import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { MoreInfo } from '../../biznas/more-info/more-info.component';

@Component({
  selector: 'home',
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html',
  directives: [CommonPage, HeaderComponent, TimelineComponent, MoreInfo],
})

export class Home {
  childHeaderData: any;
  childTimelineData: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.childHeaderData = require('assets/indexPageHeaderData.json');
    this.childTimelineData = require('assets/indexPageTimelineData.json');
  }
}
