import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from '../modals/user'
import { from } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  hide = true;
  public loginForm: FormGroup;
  credentials = false;
  constructor(private router: Router, private loginService: LoginService) {

   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }



  public loginUser = (loginFormValue) => {
    if(this.loginForm.valid) {
      this.login(loginFormValue);
    }
  }


  private login = (loginFormValue) => {
    let user: UserForLogin = {
      email: loginFormValue.email,
      password: loginFormValue.password
    }

    
    this.loginService.loginUser(user.email,user.password).subscribe((data: any) => {
      console.log(data)
      if(data.message ==='Success'){
        this.router.navigate(['/dashboard',data.name]);
        
      }
      
      
    },(error: any) => {
      this.credentials = true;
      this.errorMessage = "Wrong Credentials!!"
    });
  }
}
