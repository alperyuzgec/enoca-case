import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Düzeltildi
})
export class AppComponent implements OnInit {
  topHeadlines: any[] = [];
  title = 'news-website';
  isLoading: boolean = true; // Yüklenme durumu başlangıçta true
  errorMessage: string | null = null; // Hata mesajı için değişken

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines('tr', 'general').subscribe({
      next: (data) => {
        this.topHeadlines = data.articles; // Haberler çekildi
        this.isLoading = false; // Yükleme tamamlandı
      },
      error: (error) => {
        console.error('Hata:', error); // Konsola hata mesajını yazdır
        this.errorMessage = 'Haberler yüklenirken bir hata oluştu!'; // Hata mesajı
        this.isLoading = false; // Yükleme tamamlandı
      }
    });
  }
  
}
