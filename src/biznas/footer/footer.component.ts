import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] 
})

export class FooterComponent {
  public footerText: string;
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    var text = require('assets/footertext.json');
    this.footerText = text.footertext;
  }
}
