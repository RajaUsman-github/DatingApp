import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn:boolean;

  constructor(public accountServices: AccountService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
  }
login()
{
  this.accountServices.login(this.model).subscribe(reponse=>{
    console.log(reponse);
    // this.loggedIn=true;
  },error=>{
    console.log(error);
  })
}
logout(){
  this.accountServices.logout();
  // this.loggedIn=false;
}
getCurrentUser(){
  this.accountServices.currentUsers$.subscribe(user=>{
    // this.loggedIn=!!user;
  },error=>{
    console.log(error);
  })
}
}
