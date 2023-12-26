import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countrie } from '../interfaces/countrie';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl= "http://localhost:3000";

  constructor( private http: HttpClient ) { }

  getCountries(): Observable<Countrie[]> {
    return this.http.get<Countrie[]>(`${this.apiUrl}/paises`);
  }

  deleteCountrie(id: string): Observable<Countrie> {
    return this.http.delete<Countrie>(`${this.apiUrl}/paises/${id}`);
  }

  saveCountrie(Countrie: Countrie): Observable<Countrie> {
    return this.http.post<Countrie>(`${this.apiUrl}/paises`, Countrie);
  }
}
