import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { Section } from '../../biznas/section/section.component';
import { SectionDifferent } from '../../biznas/section-different/section-different.component';
import { Footer } from '../../biznas/footer/footer.component';

@Component({
  selector: 'platform',
  styleUrls: ['./platform.style.css'],
  templateUrl: './platform.template.html',
  directives: [CommonPage, HeaderComponent, Footer, TimelineComponent, Section, SectionDifferent],
})

export class Platform {
  headerData: any;
  timelineData: any;
  sectionData: any;
  differentSectionData: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.headerData = require('assets/platformHeaderData.json');
    this.timelineData = require('assets/platformTimelineData.json');
    this.sectionData = require('assets/platformSectionData.json');
    this.differentSectionData = require('assets/platformWhyAreWeDifferentSectionData.json');
    console.log('Platform sectionData.title', this.sectionData.title);
    console.log('Platform sectionData.lines', this.sectionData.lines);
  }
}
