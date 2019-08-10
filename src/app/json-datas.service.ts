import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonDatasService {

  constructor(private httpService: HttpClient) { }

  getBirdsData () {
    return this.httpService.get('./assets/blogs.json');
  }
  getConstantData () {
    return this.httpService.get('./assets/constant.json');
  }
  getArticleData() {
    return this.httpService.get('./assets/articles.json');
  }
  
}
