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

  updateLocationStatus(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/location/status/${id}`, {});
  }

  deleteLocation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/location/${id}`);
  }

  addWorkScopeToLocation(
    locationId: string,
    workScopeId: string
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/location/${locationId}/workscope/${workScopeId}`,
      {}
    );
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
    return this.http.get(`${this.apiUrl}/logs/display`);
  }

  completeLog(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/logs/${id}`, {});
  }

  deleteLog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/logs/${id}`);
  }
}
