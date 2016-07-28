import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'biznas-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'] 
})

export class CopyrightComponent {
  public copyrightText: string;
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    var text = require('assets/copyrighttext.json');
    this.copyrightText = text.copyrighttext;
  }
}
