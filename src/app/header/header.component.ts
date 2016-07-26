import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'biznas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = '';
  subtitle = '';

  constructor(private router: Router) {

  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    var textData = require('assets/headerdata.json');
    console.log('header  textData', textData.title);
    this.title = textData.title;
    this.subtitle = textData.subtitle;
    console.log('header  textData', this.title);
    console.log('header  textData', this.subtitle);
  }

  gotoDetail() {
    let link = ['/learn'];
    this.router.navigate(link);
  }


}
