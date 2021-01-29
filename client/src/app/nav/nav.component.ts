import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn:boolean;

  constructor(public accountServices: AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
  }
login()
{
  this.accountServices.login(this.model).subscribe(reponse=>{
  this.router.navigateByUrl('/members');
    // this.loggedIn=true;
  },error=>{
    this.toastr.show(error.error);
    console.log(error);
  })
}
logout(){
  this.accountServices.logout();
  this.router.navigateByUrl('/');
  // this.model={};
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
