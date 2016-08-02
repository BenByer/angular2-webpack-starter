import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SectionContent } from './section.content';

@Component({
  selector: 'biznas-section',
  templateUrl: './section.template.html',
  styleUrls: ['./section.style.css']
})

export class Section {
  @Input()
  public content: SectionContent;

  constructor(public route: ActivatedRoute) {
    console.log('Section constructor', this.content);
  }

  ngOnInit() {
    console.log('Section ngOnInit', this.content);
  }
}
