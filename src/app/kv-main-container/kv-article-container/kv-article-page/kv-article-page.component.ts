import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../../json-datas.service';

@Component({
  selector: 'app-kv-article-page',
  templateUrl: './kv-article-page.component.html',
  styleUrls: ['./kv-article-page.component.scss']
})
export class KvArticlePageComponent implements OnInit {

  articleData;

  constructor(private jsonDatasService: JsonDatasService){
    jsonDatasService.getArticleData()
    .subscribe(
      (response) => {
        this.articleData = response;
        console.log(response);  
      },
      (error) => console.log(error)
    );
   }

  ngOnInit() {
  }

}
