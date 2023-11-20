import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Our Films';
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller, private _metaTagService: Meta) { }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

  ngOnInit() {
    this._metaTagService.addTags([
      {name: 'keywords', content: 'our films, ourfilms'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'The Spiders'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2022-10-25', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'}
    ]);
  }
}
