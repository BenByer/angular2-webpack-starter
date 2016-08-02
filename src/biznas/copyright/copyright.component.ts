import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AppState } from '../../app/app.service';

@Component({
  selector: 'biznas-copyright',
  templateUrl: './copyright.template.html',
  styleUrls: ['./copyright.style.css'] 
})

export class CopyrightComponent {
  public copyrightText: string;
  title;
  subtitle;
  constructor(public route: ActivatedRoute, public appState: AppState) {
  }

  ngOnInit() {
    var text = require('assets/copyrighttext.json');
    this.copyrightText = text.copyrighttext;
  }
}
