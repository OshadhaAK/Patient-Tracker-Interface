import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  username: any;
  password: any;
  credentials = false;
  constructor(private router: Router) {

   }

  ngOnInit() {
  }
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  wrongCredentialsMessage(){
    return "Wrong Credentials!"

  }
  login(){

    if(this.username=='a@b.c' && this.password=='a'){
      this.router.navigate(['/dashboard', 1]);
    }

    else{
      this.credentials = true;
      this.wrongCredentialsMessage();
    }

  }
}
