import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocumentsComponent } from './documents/documents.component';
import { NewsProfileComponent } from './news/components/news-profile/news-profile.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'news',
}, {
  path: 'news',
  component: NewsComponent,
}, {
  path: 'about-us',
  component: AboutUsComponent
}, {
  path: 'documents',
  component: DocumentsComponent,
}, {
  path: 'news-profile/:id',
  component: NewsProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
