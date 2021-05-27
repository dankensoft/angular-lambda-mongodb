import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoapp';

  items = [];
  constructor(private _http: HttpClient){

  }

  ngOnInit(){
    var url = "https://srrps9t3c8.execute-api.ca-central-1.amazonaws.com/prod/todoitems";
    var me = this;
    this._http.get(url).toPromise().then(
      function(result: any) {
        // console.log(JSON.parse(result.body).items);
        me.items = JSON.parse(result.body).items;
      },
      function(error) {
        console.error(error);
      }
    )
  }
}
