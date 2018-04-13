import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
// import leaflet from "leaflet";

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit {

  @ViewChild('map') map: ElementRef;

  constructor() {
    console.log('Hello MapComponent Component');
  }

  ngOnInit() {
    
  }

}
