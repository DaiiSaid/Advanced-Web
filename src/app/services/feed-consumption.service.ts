import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedConsumption } from '../models/FeedConsumption.model';
@Injectable({
  providedIn: 'root'
})
export class FeedConsumptionService {
  private apiUrl = 'http://localhost:8080/api/feed-consumption';

  constructor(private http: HttpClient) { }

  getFeedConsumptions(): Observable<FeedConsumption[]> {
    return this.http.get<FeedConsumption[]>(this.apiUrl);
  }

  createFeedConsumption(feedConsumption: FeedConsumption): Observable<FeedConsumption> {
    return this.http.post<FeedConsumption>(this.apiUrl, feedConsumption);
  }

  updateFeedConsumption(feedConsumption: FeedConsumption): Observable<FeedConsumption> {
    return this.http.put<FeedConsumption>(`${this.apiUrl}/${feedConsumption.id}`, feedConsumption);
  }

  deleteFeedConsumption(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
