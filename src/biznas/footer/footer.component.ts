import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-footer',
  templateUrl: './footer.template.html',
  styleUrls: ['./footer.style.css']
})

export class Footer {
  public footerText: string;
  emailItems: any[];
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    var text = require('assets/footertext.json');
    this.emailItems = text.email;
    this.title = text.title;
  }
}
