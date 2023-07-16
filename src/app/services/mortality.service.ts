import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mortality } from '../models/mortality.model';

@Injectable({
  providedIn: 'root'
})
export class MortalityService {
  private apiUrl = '...'; // Replace with the actual API URL

  constructor(private http: HttpClient) { }

  getMortalities(): Observable<Mortality[]> {
    return this.http.get<Mortality[]>(`${this.apiUrl}/mortalities`);
  }

  createMortality(mortality: Mortality): Observable<Mortality> {
    return this.http.post<Mortality>(`${this.apiUrl}/mortalities`, mortality);
  }

  deleteMortality(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/mortalities/${id}`);
  }
}
