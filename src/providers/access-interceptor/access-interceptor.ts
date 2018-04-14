import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessProvider } from '../access/access';

/*
  Generated class for the AccessInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccessInterceptorProvider implements HttpInterceptor {

  constructor(public http: HttpClient, private access: AccessProvider) {
    console.log('Hello AccessInterceptorProvider Provider');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.access.access_token === null || req.url.indexOf(`/photo-aed/get-aed`) > -1 || req.url.indexOf(`/web/informations/all`) > -1) {
      return next.handle(req);
    }

    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.access.access_token}`
      },
      withCredentials: true
    });

    return next.handle(request);
  }

}
