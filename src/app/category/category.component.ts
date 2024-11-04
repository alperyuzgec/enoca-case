import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string = ''; // Burada categoryName özelliği tanımlanıyor
  articles: any[] = [];

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['name']; // URL'den kategori adını al
      this.getArticlesByCategory(this.categoryName);
    });
  }

  getArticlesByCategory(category: string): void {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(data => {
      this.articles = data.articles; // Kategoriye özel haberleri al
    });
  }
}
