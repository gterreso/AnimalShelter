import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  makeLogin(loginData) {
    this.http.post<Object>("http://localhost:3000/api/auth/login",loginData).subscribe(res => { 
      sessionStorage.setItem('api_token',res['access_token']);
      localStorage.setItem('credentials',JSON.stringify(loginData));
      //TODO change this redirect to the place it deserves
      this.router.navigate(['/admin']);
    });
    return true;
  }

  getToken() {
    let token =  sessionStorage.getItem('api_token');
    console.log("token");
    return token;
  }

  getTest() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
