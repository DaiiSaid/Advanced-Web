import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Birds } from '../models/Birds.model';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  private apiUrl = 'http://localhost:8080/api/birds';

  constructor(private http: HttpClient) { }

  saveBird(bird: Birds): Observable<Birds> {
    return this.http.post<Birds>(this.apiUrl, bird);
  }

  getBirdById(birdId: number): Observable<Birds> {
    return this.http.get<Birds>(`${this.apiUrl}/${birdId}`);
  }

  getBirds(): Observable<Birds[]> {
    return this.http.get<Birds[]>(this.apiUrl);
  }

  deleteBird(birdId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${birdId}`);
  }
}

// export class BirdsService {
//   private apiUrl = 'http://localhost:8080/api/birds'; // Replace with your backend API URL

//   constructor(private http: HttpClient) {}

//   getAllBirds(): Observable<Birds[]> {
//     return this.http.get<Birds[]>(this.apiUrl);
//   }

//   getBirdById(id: number): Observable<Birds> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Birds>(url);
//   }

//   createBird(bird: Birds): Observable<Birds> {
//     return this.http.post<Birds>(this.apiUrl, bird);
//   }

//   updateBird(id: number, bird: Birds): Observable<Birds> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.put<Birds>(url, bird);
//   }

//   deleteBird(id: number): Observable<void> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<void>(url);
//   }

//   updateWeight(id: number, newWeight: number): Observable<any> {
//     const url = `${this.apiUrl}/${id}/weight`;
//     const body = { weight: newWeight };
//     return this.http.put(url, body);
//   }
  

//   // Define the getBird method
//   getBird(id : number): Observable<Birds[]> {
//     // Implement the logic to retrieve a single bird
//     // For example:
//     // const id = 1; // ID of the bird you want to retrieve
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Birds[]>(url);
//   }
// }
