import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';
import { UserService } from '../services/user/user.service';
//import { ValidationService } from '../../services/config/config.service';
//import { UserService } from '../../services/user/user.service';
//import { ToastrService } from 'ngx-toastr';
//import { routerTransition } from '../../services/config/config.service';
import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
     errorMessage:string;
     warning:string;
     email : string;
     password:string;

     loginUserData={}
     
  constructor( private userService:UserService) { }

  ngOnInit() {
  }
  doLogin()
  {
// this.userService.doLoginn(this.loginUserData).subscribe(res=>console.log(res),err=>console.log(err))
this.userService.onClickk(this.loginUserData).subscribe(res=>
  {
  if(res.code===200 && res.isSuccess===true)
 {
  console.log(res);
  localStorage.setItem('loginData',JSON.stringify(res.data));
}
else
{
  alert(res.message);
  this.warning=String(res);
}
},
error =>
{
this.errorMessage=<any>error;
if(this.errorMessage==='Invalid Username')
{
  console.log(this.errorMessage);
}
else
    {
      console.log(this.errorMessage);
    }
    
   } );
  }
}