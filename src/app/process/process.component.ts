import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { Section } from '../../biznas/section/section.component';
import { Footer } from '../../biznas/footer/footer.component';

@Component({
  selector: 'process',
  styleUrls: ['./process.style.css'],
  templateUrl: './process.template.html',
  directives: [CommonPage, HeaderComponent, Footer, TimelineComponent, Section],
})

export class Process {
  childHeaderData: any;
  //childTimelineData: any;
  //childSectionData: any;
  //childSectionData2: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.childHeaderData = require('assets/processHeaderData.json');
    //this.childTimelineData = require('assets/processTimelineData.json');
    //this.childSectionData = require('assets/processSectionData.json');
    //this.childSectionData2 = require('assets/processSectionData2.json');

  }
}
