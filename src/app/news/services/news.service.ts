import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private apiService: ApiService) { }

  public getArticles(page: number, perPage: number, offset: number): Observable<any> {
    return this.apiService.get(`/wp-json/wp/v2/posts?acf_format=standard&page=${page}&per_page=${perPage}&offset=${offset}`);
  }

  public getArticle(id: number): Observable<any> {
    return this.apiService.get(`/wp-json/wp/v2/posts/${id}?acf_format=standard`);
  }
}
