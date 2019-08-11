import { Component, OnInit } from '@angular/core';

import { JsonDatasService } from '../json-datas.service';

@Component({
  selector: 'app-kv-header',
  templateUrl: './kv-header.component.html',
  styleUrls: ['./kv-header.component.scss']
})
export class KvHeaderComponent implements OnInit {

  constants;

  constructor(private jsonDatasService: JsonDatasService) { 
    jsonDatasService.getConstantData()
    .subscribe(
      (response) => {
        this.constants = response;
      },
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }

}
