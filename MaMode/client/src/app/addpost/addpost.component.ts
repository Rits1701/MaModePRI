import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddpostComponent implements OnInit {

  ad = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

    savePost() {
    this.http.post('/apiads/ads', this.ad)
      .subscribe(res => {
          let id = res['_id'];
         console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
