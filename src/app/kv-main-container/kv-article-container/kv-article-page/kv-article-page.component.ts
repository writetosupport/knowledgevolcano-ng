import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../../json-datas.service';

@Component({
  selector: 'app-kv-article-page',
  templateUrl: './kv-article-page.component.html',
  styleUrls: ['./kv-article-page.component.scss']
})
export class KvArticlePageComponent implements OnInit {

  articlePageData;

  constructor(private jsonDatasService: JsonDatasService){
    jsonDatasService.getArticleData()
    .subscribe(
      (response) => {
        this.articlePageData = response;
        console.log(this.articlePageData);
      },
      (error) => console.log(error)
    );
   }

  ngOnInit() {
  }

}
