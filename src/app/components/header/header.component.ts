import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home: string;
  content: HomeContent;

  constructor() {
  }

  ngOnInit() {
    this.home = 'Home';
    this.content = {
      introduction: 'Say something about home page'
    };
  }

}

interface HomeContent {
  introduction: string;
}
