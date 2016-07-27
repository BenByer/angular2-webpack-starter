import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

import { CommonPage } from '../common-page/common-page.component';

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styleUrls: ['./about.style.css'],
  templateUrl: './about.template.html',
  directives: [CommonPage],
})

export class About {
  localState;
  title;
  subtitle;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      // your resolved data from route
      this.localState = data.yourData;
    });

    var textData = require('assets/aboutdata.json');
    this.title = textData.title;
    this.subtitle = textData.subtitle;
    console.log('hello `About` component', this.title);

  }
}
