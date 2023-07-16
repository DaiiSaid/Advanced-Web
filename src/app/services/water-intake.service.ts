import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WaterIntake } from '../models/WaterIntake.model';
import { Birds } from '../models/Birds.model';

@Injectable({
  providedIn: 'root'
})
export class WaterIntakeService {
  
  private apiUrl = 'http://localhost:8080/api/water-intake';
  
  constructor(private http: HttpClient) { }

  addWaterIntake(waterIntake: WaterIntake): Observable<WaterIntake> {
    return this.http.post<WaterIntake>(this.apiUrl, waterIntake);
  }

  getBirds(): Observable<Birds[]> {
    return this.http.get<Birds[]>(`${this.apiUrl}/birds`);
  }  

  getWaterIntakes(): Observable<WaterIntake[]> {
    return this.http.get<WaterIntake[]>(this.apiUrl);
  }

  createWaterIntake(waterIntake: WaterIntake): Observable<WaterIntake> {
    return this.http.post<WaterIntake>(this.apiUrl, waterIntake);
  }

  updateWaterIntake(waterIntake: WaterIntake): Observable<WaterIntake> {
    return this.http.put<WaterIntake>(`${this.apiUrl}/${waterIntake.id}`, waterIntake);
  }

  deleteWaterIntake(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
