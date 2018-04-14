import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MarkersProvider } from '../../providers/markers/markers';
import { AMap } from '../../pages/home/home';

// import { Observable } from 'rxjs';

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

  latitude: number = 52;
  longitude: number = 18;

  markers = [];

  otherMarkers: AMap.SingleMarker[] = [];

  constructor(private mrks: MarkersProvider) {
    console.log('Hello MapComponent Component');
    this.mrks.getAed().subscribe(
      aeds => this.markers = aeds
    )
    this.mrks.getStream().subscribe(
      a => this.otherMarkers = a
    )
  }

  ngOnInit() {
    
  }

}
