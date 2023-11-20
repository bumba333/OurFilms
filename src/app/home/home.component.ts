import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  public center: google.maps.LatLngLiteral = {
      lat: 22.499531129473322,
      lng: 88.36990322329623
  };
  public markerPosition: google.maps.LatLngLiteral = {lat: 22.499531129473322, lng: 88.36990322329623};
  public zoom = 13; 

  constructor(private _meta: Meta, private _title: Title) {
    this._meta.addTags([
      {name: 'description', content: 'Our Films'},
      {name: 'author', content: 'The Spiders'},
      {name: 'keywords', content: 'our films, ourfilms'}
    ]);
    this.setTitle('Our Films Shorts Fest');
  }

  public setTitle(newTitle: string) {
    this._title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

  public openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

}
