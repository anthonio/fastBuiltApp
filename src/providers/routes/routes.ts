import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the RoutesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutesProvider {

  private apiUrl = "http://localhost:4000";

  constructor(
    public http: Http) {
    console.log('Hello RoutesProvider Provider');
  }

  getData(route, params){

    return this.http.get(this.apiUrl + route + params);
  }

  postData(route, body){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl + route, body, requestOptions);
  }
}

