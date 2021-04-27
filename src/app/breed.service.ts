import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import {apiUrl} from './constants';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  
  getAll():Observable<any> {
    return this.http.get(apiUrl+"breed");
  }

  getById(id):Observable<any> {
    return this.http.get(apiUrl + "breed/"+id);
  }


  add(breed) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>(apiUrl + "breed/",breed,{'headers':headers, observe: 'response'});
  }

  edit(breed) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>(apiUrl + "breed/"+breed.id, breed,{'headers':headers, observe: 'response'});
  }

  delete(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.delete<any>(apiUrl + "breed/"+id, {'headers':headers, observe: 'response'});
  }
}
