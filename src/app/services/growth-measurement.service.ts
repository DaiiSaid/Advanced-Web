import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrowthMeasurement } from '../models/GrowthMeasurement.model';

@Injectable({
  providedIn: 'root'
})
export class GrowthMeasurementService {
  private apiUrl = 'http://localhost:8080/api/growth-measurements'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  createGrowthMeasurement(growthMeasurement: GrowthMeasurement): Observable<GrowthMeasurement> {
    return this.http.post<GrowthMeasurement>(this.apiUrl, growthMeasurement);
  }

  getGrowthMeasurements(): Observable<GrowthMeasurement[]> {
    return this.http.get<GrowthMeasurement[]>(this.apiUrl);
  }

  deleteGrowthMeasurement(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


}
