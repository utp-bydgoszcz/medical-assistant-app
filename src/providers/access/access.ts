import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export interface LoginCredentials {
  login: string;
  password: string;
}

/*
  Generated class for the AccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccessProvider {
  access_token: string = null;
  refresh_token: string = null;

  constructor(public http: HttpClient) {
  }

  login(user: LoginCredentials) {
    return (true ? Observable.of({"access_token": "123", "refresh_token": "456"}) : this.http.post<{access_token: string, refresh_token: string}>(`/api/access_token`, user)).do(
      ({access_token, refresh_token}) => {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
      }
    );
  }

}
