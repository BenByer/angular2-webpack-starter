import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { Section } from '../../biznas/section/section.component';
import { Footer } from '../../biznas/footer/footer.component';

@Component({
  selector: 'platform',
  styleUrls: ['./platform.style.css'],
  templateUrl: './platform.template.html',
  directives: [CommonPage, HeaderComponent, Footer, TimelineComponent, Section],
})

export class Platform {
  childHeaderData: any;
  childTimelineData: any;
  childSectionData: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.childHeaderData = require('assets/platformHeaderData.json');
    this.childTimelineData = require('assets/platformTimelineData.json');
    this.childSectionData = require('assets/platformSectionData.json');

  }
}
