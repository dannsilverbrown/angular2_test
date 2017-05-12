import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsProvider {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: Http) {
    console.log('Hello PostsProvider Provider');
  }

  getPosts(){
    return this.http.get(this.url)
        .toPromise()
        .then((data) => {
          return data.json();
        })

  }

}
