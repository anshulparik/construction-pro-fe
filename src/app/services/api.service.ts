import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Locations
  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  addLocation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/location`, data);
  }

  updateLocation(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/location/${id}`, data);
  }

  deleteLocation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/locations/${id}`);
  }

  // Work Scopes
  getWorkScopes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/workscope`);
  }

  addWorkScope(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/workscope`, data);
  }

  updateWorkScope(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/workscope/${id}`, data);
  }

  deleteWorkScope(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/workscope/${id}`);
  }

  // Logs
  getLogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logs`);
  }

  completeLog(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/logs/${id}`, {});
  }

  deleteLog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/logs/${id}`);
  }
}
