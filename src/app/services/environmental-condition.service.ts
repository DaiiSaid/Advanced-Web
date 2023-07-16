import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentalConditionService {
  private apiUrl = 'http://localhost:8080/api/environmental-condition';

  constructor(private http: HttpClient) {}

  getBirds(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/birds');
  }

  getEnvironmentalConditions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createEnvironmentalCondition(conditionData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, conditionData);
  }

  deleteEnvironmentalCondition(conditionId: number): Observable<any> {
    const url = `${this.apiUrl}/${conditionId}`;
    return this.http.delete<any>(url);
  }
}
