import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';

/*
  Generated class for the HelpRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpRequestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HelpRequestProvider Provider');
  }

  listRequests() {
    return Observable.timer(6000, 4000).map(
      x => {
        return {
          firstName: (Math.random() * (2<<28)).toString(36),
          lastName: (Math.random() * (2<<28)).toString(36),
          lat: 52 + Math.random() * 0.003,
          lon: 18 + Math.random() * 0.003
        }
      }
    )
  }

  deny(req) {
    return Observable.of(true);
  }

  accept(req) {
    return Observable.of(true).map(_ => {
      let request = Object.assign({}, req);

      request.tel = "";

      return request;
    });
  }

}
