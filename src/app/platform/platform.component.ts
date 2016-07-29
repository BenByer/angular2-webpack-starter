import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { Section } from '../../biznas/section/section.component';
import { SectionDifferent } from '../section-different/section-different.component';
import { Footer } from '../../biznas/footer/footer.component';

@Component({
  selector: 'platform',
  styleUrls: ['./platform.style.css'],
  templateUrl: './platform.template.html',
  directives: [CommonPage, HeaderComponent, Footer, TimelineComponent, Section, SectionDifferent],
})

export class Platform {
  platformHeaderData: any;
  platformTimelineData: any;
  childSectionData: any;
  whyAreWeDifferentSectionData: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.platformHeaderData = require('assets/platformHeaderData.json');
    this.platformTimelineData = require('assets/platformTimelineData.json');
    this.childSectionData = require('assets/platformSectionData.json');
    this.whyAreWeDifferentSectionData = require('assets/platformWhyAreWeDifferentSectionData.json');

  }
}
