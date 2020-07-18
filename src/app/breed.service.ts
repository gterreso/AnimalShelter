import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  
  getAll():Observable<any> {
    return this.http.get("http://localhost:3000/api/breed");
  }

  getById(id):Observable<any> {
    return this.http.get("http://localhost:3000/api/breed/"+id);
  }


  add(breed) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>("http://localhost:3000/api/breed/",breed,{'headers':headers, observe: 'response'});
  }

  edit(breed) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>("http://localhost:3000/api/breed/"+breed.id, breed,{'headers':headers, observe: 'response'});
  }

  delete(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.delete<any>("http://localhost:3000/api/breed/"+id, {'headers':headers, observe: 'response'});
  }
}
