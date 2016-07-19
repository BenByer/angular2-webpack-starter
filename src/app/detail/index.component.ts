import { Component } from '@angular/core';

@Component({
  selector: 'index',

  template: `
    <h1>Hello from Index in detail folder</h1>
  `
})
export class Index {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component in detail folder');
  }
}
