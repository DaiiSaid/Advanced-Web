import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login'; // Replace with your backend API login URL

  constructor(private http: HttpClient) {}

  login(username: string, password: any): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body);
  }

  // Other methods in the service
}
