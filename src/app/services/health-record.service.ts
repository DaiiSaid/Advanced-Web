import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthRecord } from '../models/HealthRecord.model';
import { Birds } from '../models/Birds.model';

@Injectable({
  providedIn: 'root'
})
export class HealthRecordService {
  private apiUrl = 'http://localhost:8080/api/health-records';

  constructor(private http: HttpClient) { }

  getBirds(): Observable<Birds[]> {
    return this.http.get<Birds[]>(`${this.apiUrl}/birds`);
  }

  getHealthRecords(): Observable<HealthRecord[]> {
    return this.http.get<HealthRecord[]>(this.apiUrl);
  }

  getHealthRecordById(id: number): Observable<HealthRecord> {
    return this.http.get<HealthRecord>(`${this.apiUrl}/${id}`);
  }

  createHealthRecord(record: HealthRecord): Observable<HealthRecord> {
    return this.http.post<HealthRecord>(this.apiUrl, record);
  }

  updateHealthRecord(record: HealthRecord): Observable<HealthRecord> {
    return this.http.put<HealthRecord>(`${this.apiUrl}/${record.id}`, record);
  }

  deleteHealthRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
