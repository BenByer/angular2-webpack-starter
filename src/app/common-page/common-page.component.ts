import { Component } from '@angular/core';
import { Page } from '../../biznas/page/page.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'common-page',
  styleUrls: ['./common-page.style.css'],
  templateUrl: './common-page.template.html',
  directives: [Page, HeaderComponent, FooterComponent],
})
export class CommonPage {
}