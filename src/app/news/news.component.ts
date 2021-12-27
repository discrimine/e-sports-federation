import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news: any = {
    total: 0,
    items: [],
  };
  public isLoading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  public getNews(page: number = 1, perPage: number = 10, offset: number = 0): void {
    this.isLoading = true;
    this.newsService.getArticles(page, perPage, offset).pipe(take(1)).subscribe((res) => {
      this.news.total = res.headers.get('X-WP-Total');
      console.log(res.body)
      this.news.items = res.body.map((item: any) => {
        return {
          id: item.id,
          preview: item.acf.preview.sizes.news_plugin_small,
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

  public onPageChange(paginator: PageEvent): void {
    this.getNews(paginator.pageIndex + 1, paginator.pageSize, paginator.pageIndex * paginator.pageSize)
  }

}
