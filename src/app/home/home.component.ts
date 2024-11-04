import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topHeadlines: any[] = [];
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getTopHeadlines();
  }

  getTopHeadlines(): void {
    this.newsService.getTopHeadlines('us', 'general').subscribe(data => {
      this.topHeadlines = data.articles;
    });
  }
}
