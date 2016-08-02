import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { Testimonial } from '../testimonial/testimonial.component';
import { Section } from '../../biznas/section/section.component';
import { Footer } from '../../biznas/footer/footer.component';

@Component({
  selector: 'process',
  styleUrls: ['./process.style.css'],
  templateUrl: './process.template.html',
  directives: [CommonPage, HeaderComponent, Footer, TimelineComponent, Testimonial, Section],
})

export class Process {
  headerData: any;
  sectionData: any;
  testimonialData: any;

  constructor(public route: ActivatedRoute) {
    this.headerData = require('assets/processHeaderData.json');
    this.sectionData = require('assets/processSectionData.json');
    this.testimonialData = require('assets/partners.json');
    //console.log('Process sectionData.title', this.sectionData.title);
    //console.log('Process sectionData', this.sectionData);
    console.log('Process testimonialData', this.testimonialData);
 }
}
