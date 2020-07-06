import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData = {"username":"","password":""};  

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  makeLogin() {
    this.authService.makeLogin(this.loginData);
  }

  getTest() {
    this.authService.getTest().subscribe(res => console.log(res));
  }

}
