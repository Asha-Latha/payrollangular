import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { RouterModule, Routes ,Router} from '@angular/router';


import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ UserService ]
})
export class RegisterComponent implements OnInit {
  employeeForm: FormGroup;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }
   onSubmit()
 {
  //    this.userService.regg(this.employeeForm.value).subscribe(
  //        res=>console.log(res),err=>console.log(err))
  // //   }
   console.log(this.employeeForm.value);
   
  

}

}

// empRegister()
// {
//  //console.log(this.registerUserData);
// this.userService.empRegisterr(this.registerUserData).subscribe(
//   res=>console.log(res),err=>console.log(err)
// )
// }
// }


