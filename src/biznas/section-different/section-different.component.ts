import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SectionDifferentContent } from './section-different.content';

@Component({
  selector: 'biznas-section-different',
  templateUrl: './section-different.component.html',
  styleUrls: ['./section-different.component.css']
})

export class SectionDifferent {
  @Input() content: SectionDifferentContent;

  constructor(public route: ActivatedRoute) {
  }
}
