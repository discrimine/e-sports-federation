import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-profile',
  templateUrl: './news-profile.component.html',
  styleUrls: ['./news-profile.component.scss']
})
export class NewsProfileComponent implements OnInit {

  public isLoading: boolean = true;
  public article: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsService.getArticle(this.route.snapshot.params['id']).pipe(take(1)).subscribe((article) => {
      this.article = article.body;
    });
  }

}
