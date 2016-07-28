import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
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
    console.log("emailItems", this.emailItems);
    this.title = text.title;
  }
}
