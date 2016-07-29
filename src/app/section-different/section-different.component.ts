import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-section-different',
  templateUrl: './section-different.component.html',
  styleUrls: ['./section-different.component.css']
})

export class SectionDifferent {
  @Input() sectionDifferentData: any;

  public footerText: string;
  sectionText: any[];
  lines: any[];
  image: any;
  title: any;
  imagetitle: any;
  imagewidth: any;
  alt: any;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    //var text = require('assets/sectiontext.json');
    //this.sectionText = text;
    //console.log("sectionText", this.sectionText);
    this.title = this.sectionDifferentData.title;
    this.image = this.sectionDifferentData.image;
    this.imagewidth = this.sectionDifferentData.width;
    this.alt = this.sectionDifferentData.alt;
    this.imagetitle = this.sectionDifferentData.imagetitle;
    this.lines = this.sectionDifferentData.lines;
    console.log('hello `Section-different`  this.sectionDifferentData.ptag', this.ptag);
  }
}
