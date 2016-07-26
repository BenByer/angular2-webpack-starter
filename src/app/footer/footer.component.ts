import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'biznas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  footerText = "Copyright &copy; 2016 Biznas Innovations, Inc.";
  constructor(private router: Router) {
  }
}
