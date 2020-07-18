import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData = {"username":"","password":""};  

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  makeLogin() {
    this.authService.makeLogin(this.loginData);
  }

}
