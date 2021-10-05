import { Injectable } from '@angular/core';

import {
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GetTodayCasesService {

  constructor(private http: HttpClient) { }
  
  getTodayCases(): Observable<any> {
    return this.http.get<any>(`https://static.easysunday.com/covid-19/getTodayCases.json`);
  }
}

