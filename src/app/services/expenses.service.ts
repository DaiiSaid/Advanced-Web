import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = 'http://localhost:8080/api/expenses';


  constructor(private http: HttpClient) {}

  saveExpenses(expenses: any): Observable<any> {
    const endpoint = `${this.apiUrl}/expenses`; // Replace with your expenses API endpoint
    return this.http.post(endpoint, expenses);
  }
}
