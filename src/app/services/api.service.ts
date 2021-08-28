import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    const url = "https://api.publicapis.org/categories";
    return this.http.get(url)
  }
}
