import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private apiUrl = 'http://e-sports-federation';
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(this.apiUrl+url, { observe: 'response' });
  }
}
