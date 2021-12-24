import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsProfileComponent } from './components/news-profile/news-profile.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewsComponent, NewsCardComponent, NewsProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewsModule { }
