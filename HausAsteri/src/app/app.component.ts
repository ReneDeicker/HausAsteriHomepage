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
