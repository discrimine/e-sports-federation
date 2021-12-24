import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocumentsComponent } from './documents/documents.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'news',
}, {
  path: 'news',
  component: NewsComponent
}, {
  path: 'about-us',
  component: AboutUsComponent
}, {
  path: 'documents',
  component: DocumentsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
