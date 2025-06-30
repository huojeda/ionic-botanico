import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // API 1: JSONPlaceholder - Posts de prueba
  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // API 2: TheMealDB - Categorías de comida
  getMealCategories(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
}
