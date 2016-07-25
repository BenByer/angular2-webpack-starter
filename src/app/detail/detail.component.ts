import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'detail',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    [<router-outlet>detail.component.ts</router-outlet>]
  `
})
export class Detail {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
