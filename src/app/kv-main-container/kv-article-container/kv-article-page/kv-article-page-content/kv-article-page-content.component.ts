import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../../../json-datas.service';

@Component({
  selector: 'app-kv-article-page-content',
  templateUrl: './kv-article-page-content.component.html',
  styleUrls: ['./kv-article-page-content.component.scss']
})
export class KvArticlePageContentComponent implements OnInit {
  
  articleData
  
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
