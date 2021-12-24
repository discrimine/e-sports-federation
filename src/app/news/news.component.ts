import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news: any[] = [];
  public isLoading: boolean = true;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().pipe(take(1)).subscribe((news: any[]) => {
      console.log(news);
      this.news = news.map((item) => {
        return {
          id: item.id,
          preview: item.acf.preview.url,
          title: item.title.rendered,
          description: item.content.rendered.replace(/<(.|\n)*?>/g, '').substring(0, 600),
          date: new Date(item.date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      });
      this.isLoading = false;
    }, (error) => {
      console.error(error);
      this.isLoading = false;
    });
  }

}
