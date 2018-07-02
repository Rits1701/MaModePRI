import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  ads:any;

  constructor(private auth: AuthenticationService, private http: HttpClient) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    console.log("hi")

    this.http.get('/apiads/ads').subscribe(data => {
      console.log(data);
      this.ads = data;
    });
  }


}
