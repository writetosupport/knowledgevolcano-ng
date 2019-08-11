import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../json-datas.service';

@Component({
  selector: 'app-kv-article-container',
  templateUrl: './kv-article-container.component.html',
  styleUrls: ['./kv-article-container.component.scss']
})
export class KvArticleContainerComponent implements OnInit {

  articleContainerData;

  constructor(private jsonDatasService: JsonDatasService) {
    jsonDatasService.getArticleData()
      .subscribe(
        (response) => {
          this.articleContainerData = response;
        },
        (error) => console.log(error)
      );
  }

  ngOnInit() {
  }

}
