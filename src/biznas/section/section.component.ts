import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class Section {
  @Input() sectionData: any;

  public footerText: string;
  sectionText: any[];
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    //var text = require('assets/sectiontext.json');
    //this.sectionText = text;
    //console.log("sectionText", this.sectionText);
    this.title = this.sectionData.title;
    this.subtitle = this.sectionData.subtitle;
    console.log('hello `Section`  this.sectionData', this.sectionData);
  }
}
