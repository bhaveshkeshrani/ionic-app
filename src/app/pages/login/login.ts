import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    console.log(this.login.username)
    this.submitted = true;
    if (form.valid) {
      if(this.login.username == 'b' && this.login.password == '123') {
        // this.userData.login(this.login.username);
        this.router.navigateByUrl('/app/tabs/schedule');
      } else {
        // alert("incorrect")
        this.router.navigateByUrl('/login');
      }
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
