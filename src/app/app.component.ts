import { Component, OnInit } from '@angular/core';
import { RedditAPI } from './services/RedditAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'RedditClone';
  
  constructor(public api:RedditAPI) {

  }
}
