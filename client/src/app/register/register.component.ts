import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={}
// @Input() userFromHomeComponent:any;
@Output() cancelRegister=new EventEmitter();
  constructor(private accountServices:AccountService) { }
  ngOnInit(): void {
  }
  cancel(){
    this.cancelRegister.emit();
  }
  register(){
    this.accountServices.register(this.model).subscribe(reponse=>{
      console.log(reponse);
      this.cancel();
    },error=>{
      console.log(error);
    })
  }
}
