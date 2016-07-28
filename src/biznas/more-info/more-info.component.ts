import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'biznas-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})

export class MoreInfo {
  public footerText: string;
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    var text = require('assets/more-infotext.json');
    this.footerText = text.footertext;
  }
}
