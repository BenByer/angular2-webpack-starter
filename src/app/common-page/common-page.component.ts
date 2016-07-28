import { Component } from '@angular/core';
import { Page } from '../../biznas/page/page.component';
import { NavbarComponent } from '../../biznas/navbar/navbar.component';
import { CopyrightComponent } from '../../biznas/copyright/copyright.component';

@Component({
  selector: 'common-page',
  styleUrls: ['./common-page.style.css'],
  templateUrl: './common-page.template.html',
  directives: [Page, NavbarComponent, CopyrightComponent],
}) 
export class CommonPage {
}