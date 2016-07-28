import { Component } from '@angular/core';
import { Page } from '../../biznas/page/page.component';
import { NavbarComponent } from '../../biznas/navbar/navbar.component';
import { FooterComponent } from '../../biznas/footer/footer.component';
import { MoreInfo } from '../../biznas/more-info/more-info.component';

@Component({
  selector: 'common-page',
  styleUrls: ['./common-page.style.css'],
  templateUrl: './common-page.template.html',
  directives: [Page, NavbarComponent, FooterComponent],
})
export class CommonPage {
}