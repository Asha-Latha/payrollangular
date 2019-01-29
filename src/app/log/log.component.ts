import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';

import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers:[UserService]
})
export class LogComponent implements OnInit {

  errorMessage:string;
  warning:string;
loginForm: FormGroup;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required])
    
    });
  }
onClick()
{
  this.userService.onClickk(this.loginForm.value).subscribe( res=>
    {
    if( res.code===200 && res.isSuccess===true)
    {
     console.log (res);
     localStorage.setItem('signUpData',JSON.stringify(res.data));
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
   if(this.errorMessage==='Invalid details')
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
