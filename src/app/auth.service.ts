import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  makeLogin(loginData) {
    this.http.post<Object>("http://localhost:3000/api/auth/login",loginData).subscribe(res => { 
      sessionStorage.setItem('api_token',res['access_token']);
      localStorage.setItem('credentials',JSON.stringify(loginData));
      
      this.loggedIn = true;
      this.router.navigate(['/admin']);
    });
    return true;
  }

  getToken() {
    let token =  sessionStorage.getItem('api_token');
    console.log("token " + token);
    return token;
  }

  logout() {
    sessionStorage.setItem('api_token',"");
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
