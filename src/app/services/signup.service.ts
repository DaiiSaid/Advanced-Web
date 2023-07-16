import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/api/signup'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
