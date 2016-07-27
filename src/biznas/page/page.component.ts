import { Component } from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'biz-page',
  styleUrls: ['./page.style.css'],
  templateUrl: './page.template.html',
})
export class Page {
  public title: string;
}