import { Component, HostListener } from '@angular/core';
import { Globals } from './globals/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public globals: Globals) {
    this.globals.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.globals.windowWidth = event.target.innerWidth;
  }
}
/*
//Default

  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },

//Modified

  "scripts": {
    "ng": "ng",
    "start": "node server.js",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },

*/
