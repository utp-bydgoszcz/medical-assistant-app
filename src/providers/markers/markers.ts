import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../app/environment';
import { AMap } from '../../pages/home/home';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';

/*
  Generated class for the MarkersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarkersProvider {

  otherMarkers: AMap.SingleMarker[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello MarkersProvider Provider');
  }

  getAed() {
    return this.http.get<any[]>(`${environment.server}/photo-aed/get-aed`);
  }

  getAll() {
    return this.http.get<AMap.SingleMarker[]>(`${environment.server}/web/informations/all`);
  }

  getStream() {
    return Observable.timer(1000, 1000).flatMap(
      _ => {
        return this.getAll().map(
          marks => {
            if (this.otherMarkers.length <= marks.length) {
              this.otherMarkers.forEach((m, i, a) => Object.assign(a[i], marks[i]));
              for (let i = this.otherMarkers.length; i < marks.length; i++) {
                this.otherMarkers.push(marks[i]);
              }
            } else {
              marks.forEach((m, i, a) => Object.assign(this.otherMarkers[i], marks[i]));
              this.otherMarkers.splice(marks.length, this.otherMarkers.length - marks.length);
            }

            return this.otherMarkers;
          }
        );
      }
    );
  }

}
