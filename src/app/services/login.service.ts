import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserForLogin } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "http://localhost:5000/api/users/login";
  constructor(private http: HttpClient) { 

  }

  loginUser(email,password){
    let params = {
      emailaddress: email,
      password: password
    }
    return this.http.post(`${this.url}`,params);
  }


  
}
