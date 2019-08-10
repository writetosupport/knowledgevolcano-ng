import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../../../json-datas.service';

@Component({
  selector: 'app-kv-blog-card',
  templateUrl: './kv-blog-card.component.html',
  styleUrls: ['./kv-blog-card.component.scss']
})
export class KvBlogCardComponent implements OnInit {

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

