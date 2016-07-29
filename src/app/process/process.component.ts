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
  headerData: any;

  constructor(public route: ActivatedRoute) {
    this.headerData = require('assets/processHeaderData.json');
 }
}
