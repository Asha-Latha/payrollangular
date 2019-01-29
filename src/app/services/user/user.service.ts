import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';
 import {HttpClient} from '@angular/common/http';
 import { Constants } from '../../constant';
//import { constants } from 'http2';

@Injectable()
export class UserService {
	url: string;
    existUrl: string;
    regUrl:string;

    
	constructor(private http: Http) {
    this.url = Constants.HOME_URL + 'userlogin/';
    this.existUrl = Constants.HOME_URL + 'user/exist';
    this.regUrl=Constants.HOME_URL + 'usersignup/';
    
    // this.existUrl = Constants.HOME_URL + 'userlogin';
}

	doLoginn(data){
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.url,data).timeout(300000)
        . map((res: Response) => {
            console.log("data",res.json());
           return res.json();
       })
       .catch(this.handleError);
	
    }
    onClickk(data){
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.url,data).timeout(300000)
        . map((res: Response) => {
            console.log("data",res.json());
           return res.json();
       })
       .catch(this.handleError);
	
    }
    
    signUp(data)
    {
        //console.log(this.registerUserData);
        // const body = {

        //              companyName:data.companyName,
        //              email: data.email,
        //              password: data.password,
        //              cpassword:data.cpassword,
        //              cid:data.cid

        //         };
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.regUrl,data).timeout(300000)
       . map((res: Response) => {
            console.log("data",res.json());
           //console.log(true);
           return res.json();
       })
       .catch(this.handleError);

    }

    
    // empRegisterr(data){
		
	// 	const body = {

    //         email: data.email,
    //         password: data.password
    //     };
    //      console.log("body" + JSON.stringify(body));
    //     const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
    //     const options = new RequestOptions({ headers: headers, method: 'post' });
    //     return this.http.post(this.regUrl, body, options).timeout(300000)
    //         .map((res: Response) => {
    //              console.log("data",res.json());
    //             return res.json();
    //         })
    //         .catch(this.handleError);

    // }

    userExist(email){
        const body = {
            email: email          
        };
         console.log("body" + JSON.stringify(body));
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.existUrl, body, options).timeout(300000)
            .map((res: Response) => {
                 console.log("data",res.json());
                return res.json();
            })
            .catch(this.handleError);
    }

	private handleError(error: Response) {
         console.error(error);
        return Observable.throw(error.json().message);
    }
  }

  
 