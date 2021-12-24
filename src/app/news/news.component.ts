import { Component, OnInit } from '@angular/core';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news: any[]) => {
      console.log(news);
      this.news = news.map((singleNews) => { return { preview: singleNews.acf.preview.url, title: singleNews.title.rendered, date: singleNews.date } });
    })
  }

}
