import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Title {
  value = 'Angular 2 in title.service.ts';
  constructor(public http: Http) {

  }

  getData() {
    console.log('Title#getData(): Get Data in title.service.ts');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
      value: 'AngularClass'
    };
  }

}
