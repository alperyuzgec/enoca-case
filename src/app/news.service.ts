import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Article {
  title: string;
  urlToImage: string;
  description: string;
}

export interface TopHeadlinesResponse {
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae65b5d7eec48cf9854404d4a624844';

  constructor(private http: HttpClient) { }

  getTopHeadlines(p0: string, p1: string): Observable<TopHeadlinesResponse> {
    console.log('API isteği gönderildi:', this.apiUrl);
    return this.http.get<TopHeadlinesResponse>(this.apiUrl).pipe(
      tap(data => console.log('API yanıtı:', data))
    );
  }

  getTopHeadlinesByCategory(category: string): Observable<TopHeadlinesResponse> {
    const categoryUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0ae65b5d7eec48cf9854404d4a624844`;
    console.log('Kategoriye göre URL:', categoryUrl); 
    return this.http.get<TopHeadlinesResponse>(categoryUrl).pipe(
      tap(data => console.log('Kategori API yanıtı:', data))
      
    );console.log(`Kategori URL'si: ${categoryUrl}`);

  }
}
