import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../types/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }
}
