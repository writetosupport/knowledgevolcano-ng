import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { KvBlogsContainerComponent } from './kv-main-container/kv-blogs-container/kv-blogs-container.component';
import { KvArticleContainerComponent } from './kv-main-container/kv-article-container/kv-article-container.component';

const routes: Routes = [
  { path: '', component: KvBlogsContainerComponent },
  { path: 'article', component: KvArticleContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
