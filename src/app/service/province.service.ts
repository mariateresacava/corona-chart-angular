import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Province } from './model/province';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProvinceService {
 private heroesUrl = 'api/heroes';  // URL to web api 
httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getProvincesByDate (): Observable<Province[]> {
    return this.http.get<Province[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched provinces')),
        catchError(this.handleError<Province[]>('getProvincesByDate', []))
      );
  }
}

