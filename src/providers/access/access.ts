import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { environment } from '../../app/environment';

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

  notifyOnUrgent: {
    name: string;
    tel: string;
  }[] = [];

  user: {
    firstName: string;
    lastName: string;
    tel: string | number,
    notifyOnUrgent?: {
      name: string;
      tel: string;
    }[];
  } = {
      firstName: `Tomek`,
      lastName: `Domański`,
      tel: '',
      notifyOnUrgent: []
    };

  constructor(public http: HttpClient) {
  }

  login(user: LoginCredentials) {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', user.login)
      .set('password', user.password);

    return this.http.post<{ access_token: string, refresh_token: string }>(`${environment.server}/oauth/token`, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Basic ${btoa("health-assistant:health-assistant-secret")}`)
    }).do(
      ({ access_token, refresh_token }) => {
        this.access_token = access_token;
        this.refresh_token = refresh_token;

        if (window.localStorage) {
          window.localStorage.setItem("refresh_token", refresh_token);
          window.localStorage.setItem("access_token", access_token);
        }
      }
    );
  }

  autologin() {
    let refresh_token = null;
    if (window.localStorage) {
      refresh_token = window.localStorage.getItem("refresh_token");
    }
    if (refresh_token) {
      const body = new HttpParams()
        .set('grant_type', 'refresh_token')
        .set('refresh_token', refresh_token);

      return this.http.post<{ access_token: string, refresh_token: string }>(`${environment.server}/oauth/token`, body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Basic ${btoa("health-assistant:health-assistant-secret")}`)
      }).do(
        ({ access_token, refresh_token }) => {
          this.access_token = access_token;
          this.refresh_token = refresh_token;
        }
      );
    } else {
      return Observable.defer(() => { throw "No refresh token found"; });
    }
  }

}
