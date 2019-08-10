import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../../../../json-datas.service';

@Component({
  selector: 'app-kv-related-article-card',
  templateUrl: './kv-related-article-card.component.html',
  styleUrls: ['./kv-related-article-card.component.scss']
})
export class KvRelatedArticleCardComponent implements OnInit {

  blogCardDetails;

  constructor(private jsonDatasService: JsonDatasService){
    jsonDatasService.getBirdsData()
    .subscribe(
      (response) => {
        this.blogCardDetails = response;
        console.log(response);  
      },
      (error) => console.log(error)
    );
   }

  ngOnInit() {
  }

}
