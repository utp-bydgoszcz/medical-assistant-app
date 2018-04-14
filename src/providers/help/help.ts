import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import { Person } from '../../components/helper-info/helper-info';
import { environment } from '../../app/environment';

export type HelpType = "urgent" | "important" | "regular";

/*
  Generated class for the HelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HelpProvider Provider');
  }

  sendHelp(type: HelpType) {
    return Observable.timer(2000, 1000).map(
      x => {
        return {
          firstName: "Cezary",
          lastName: "Kolaszewski",
          tel: '',
          img: `https://picsum.photos/${201 + x}`
        };
      }
    );
  }

  dismissPerson(person: Person) {
    return Observable.timer(1000 + Math.random() * 100).take(1);
  }

  updatePosition(position: { latitude: number, longitude: number, accuracy: number, timestamp: number }) {
    console.log(`UPDATING POSITION`, position);
    // return Observable.of(true);
    return this.http.post(`${environment.server}/position/set-position`, position);
  }

}
