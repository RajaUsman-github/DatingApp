import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  users:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // debugger;
    // this.getUsers();
  }
  registerToggle(){
    this.registerMode=!this.registerMode;
  }
 getUsers(){
    this.http.get('https://localhost:44374/api/Users').subscribe(user =>this.users=user );
  }
}
