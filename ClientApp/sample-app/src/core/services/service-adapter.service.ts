import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServiceAdapter {

  constructor(private _http: HttpClient) {
  }

  readonly httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  });

  getaction<T>(path: string): Observable<any> {

    return this._http.get<T>(path,
      {
        'headers': this.httpHeaders
      })
      .pipe(catchError(this._handleError));
  }

  
  getactionNoHeaders<T>(path: string): Observable<any> {

    return this._http.get<T>(path)
      .pipe(catchError(this._handleError));
  }

  postaction<T>(param: Object, path: string): Observable<any> {

    let body = JSON.stringify(param);

    return this._http.post<T>(path, body,
      {
        'headers': this.httpHeaders
      })
      .pipe(catchError(this._handleError));
  }

  private _handleError(error: any) {
    // log error
    console.log('service adapter error: ', error);
    return throwError(error || 'Server error');
  }
}
