import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../json-datas.service';

@Component({
  selector: 'app-kv-header',
  templateUrl: './kv-header.component.html',
  styleUrls: ['./kv-header.component.scss']
})
export class KvHeaderComponent implements OnInit {

  kvConstants;

  constructor(private jsonDatasService: JsonDatasService) { 
    jsonDatasService.getConstantData()
    .subscribe(
      (response) => {
        this.kvConstants = response;
        console.log(response);  
      },
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }

}
