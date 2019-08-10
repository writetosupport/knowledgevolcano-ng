import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services used in project
import { HttpClientModule } from '@angular/common/http';
import { JsonDatasService } from './json-datas.service';

// Custom Components created
import { KvHeaderComponent } from './kv-header/kv-header.component';
import { KvMainContainerComponent } from './kv-main-container/kv-main-container.component';
import { KvBlogsContainerComponent } from './kv-main-container/kv-blogs-container/kv-blogs-container.component';
import { KvBlogCardComponent } from './kv-main-container/kv-blogs-container/kv-blog-card/kv-blog-card.component';
import { KvArticleContainerComponent } from './kv-main-container/kv-article-container/kv-article-container.component';
import { KvFooterComponent } from './kv-footer/kv-footer.component';
import { KvArticlePageComponent } from './kv-main-container/kv-article-container/kv-article-page/kv-article-page.component';
import { KvArticlePageContentComponent } from './kv-main-container/kv-article-container/kv-article-page/kv-article-page-content/kv-article-page-content.component';
import { KvRelatedArticlesComponent } from './kv-main-container/kv-article-container/kv-article-page/kv-related-articles/kv-related-articles.component';
import { KvRelatedArticleCardComponent } from './kv-main-container/kv-article-container/kv-article-page/kv-related-articles/kv-related-article-card/kv-related-article-card.component';
@NgModule({
  declarations: [
    AppComponent,
    KvHeaderComponent,
    KvMainContainerComponent,
    KvBlogsContainerComponent,
    KvBlogCardComponent,
    KvArticleContainerComponent,
    KvFooterComponent,
    KvArticlePageComponent,
    KvArticlePageContentComponent,
    KvRelatedArticlesComponent,
    KvRelatedArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonDatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
