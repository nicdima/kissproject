import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewssourcesService {
  constructor(private http: HttpClient) {}
  apiUrl =
    'https://newsapi.org/v2/top-headlines/sources?apiKey=b677758ede984903ae69c27f93f6f3b2';
  getNewsSources(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
