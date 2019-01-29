
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
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  errorMessage:string;
     warning:string;
  signUpForm: FormGroup;
  
  
 constructor(private userService:UserService) {  }
//constructor(){}
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      cpassword:new FormControl('',[Validators.required]),
      cid:new FormControl('',[Validators.required,Validators.minLength(5)]),
      cc :new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required])

    });
  }
onSubmit()
{
// console.log(this.signUpForm.value);
 this.userService.signUp(this.signUpForm.value).subscribe( res=>
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
