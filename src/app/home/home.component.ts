import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { HeaderComponent } from '../header/index';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  //providers: [ Title ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ HeaderComponent ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = { };
  
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
    var textData = require('assets/homedata.json');
    this.appState.set('title', textData.title);
    this.appState.set('subtitle', textData.subtitle);
    this.appState.set('button', textData.button);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
