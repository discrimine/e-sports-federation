import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsProfileComponent } from './components/news-profile/news-profile.component';



@NgModule({
  declarations: [NewsComponent, NewsCardComponent, NewsProfileComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
