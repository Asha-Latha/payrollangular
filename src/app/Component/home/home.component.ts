// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    UserService
]
})
export class HomeComponent implements OnInit {
  
  errorMessage: string;
  warning:string;
  email : string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  UserExists()
  {
    this.userService.userExist(this.email).subscribe(users => 
    {
      if (users.isSuccess===true) 
      {
          console.log("users",users);
          localStorage.setItem('userData', JSON.stringify(users.data));
        	//this.router.navigate(['/login/' + this.email]);			
      } 
      else 
      {
        alert(users.message);
         this.warning = String(users);
         //this.router.navigate(['/signup/']);
      }
    },	
    error => 
    {
      this.errorMessage = <any>error;
      // console.log(this.errorMessage);
      if (this.errorMessage === 'Invalid Username') 
      {
				console.log(this.errorMessage);           
      }
      else 
      {
	  		console.log(this.errorMessage);
      }
    });
  }
}


// $(document).ready(function(){
//   var email;
//   $("#submit").click(function(){
//       email=$("#email").val();
//    $.post("http://54.251.138.1:9305/api/dapps/8d2ad02c847eb9aaab012bb27e8f681639e93291f837596f40458f2cecedb591/user/exist",
//    {email: email},
//    function(data)
//    {
//       if(data.isSuccess===true)
//       {
//           window.location.href="../Login/Login.html?"+"email="+email;
//       }
//       else
//       {
//           window.location.href="../Signup/Signup.html";
//       }
//   });
// });

